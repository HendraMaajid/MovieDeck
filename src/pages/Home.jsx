// Home.jsx
import MovieCard from "../components/MovieCard";
import { useState, useEffect, useCallback } from "react";
import { searchMovies, getPopularMovies, getGenres } from "../services/api";

const MAX_PAGES_TO_SHOW = 3;

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [genresMap, setGenresMap] = useState({});

    // State untuk Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentMode, setCurrentMode] = useState('popular'); 

    const fetchData = useCallback(async (query = null, page = 1) => {
        setLoading(true);
        setError(null);

        try {
            if (Object.keys(genresMap).length === 0) {
                const fetchedGenres = await getGenres();
                setGenresMap(fetchedGenres);
            }

            let responseData;
            if (query && query.trim()) {
                responseData = await searchMovies(query, page);
                setCurrentMode('search');
            } else {
                responseData = await getPopularMovies(page);
                setCurrentMode('popular');
            }

            setMovies(responseData.results);
            setCurrentPage(responseData.page);
            setTotalPages(responseData.total_pages);

            if (responseData.results.length === 0 && query && query.trim()) {
                setError("No movies found matching your search. Try a different search term.");
            } else if (responseData.results.length === 0 && !query) {
                 setError("No popular movies available at the moment.");
            }
        } catch (err) {
            setError(`Failed to fetch movies: ${err.message}`);
            setMovies([]);
            setTotalPages(0);
            setCurrentPage(1);
        } finally {
            setLoading(false);
        }
    }, [genresMap]);

    // Initial fetch for popular movies on component mount
    useEffect(() => {
        fetchData(null, 1); // Fetch initial popular movies on page 1
    }, [fetchData]);

    const handleSearch = (event) => {
        event.preventDefault();
        // Ketika mencari, selalu mulai dari halaman 1
        fetchData(searchTerm, 1);
    };

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages || page === currentPage) return; // Validasi halaman

        // Panggil fetchData lagi dengan mode dan halaman yang sesuai
        if (currentMode === 'popular') {
            fetchData(null, page);
        } else if (currentMode === 'search') {
            fetchData(searchTerm, page);
        }
    };

    const handleResetSearch = () => {
        setSearchTerm("");
        fetchData(null, 1); // Reset ke film populer halaman 1
    };


    // Logika untuk menampilkan tombol halaman
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, currentPage - Math.floor(MAX_PAGES_TO_SHOW / 2));
        const endPage = Math.min(totalPages, startPage + MAX_PAGES_TO_SHOW - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`
                        px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out
                        ${i === currentPage ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white'}
                        ${totalPages === 0 ? 'opacity-50 cursor-not-allowed' : ''} // Disable if no pages
                    `}
                    disabled={totalPages === 0}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };


    if (loading) {
        return <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center text-2xl">Loading movies...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white py-8 px-4 sm:px-6 md:px-8 lg:px-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-indigo-400">Movie Explorer</h1>

            <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-10 max-w-xl mx-auto px-4">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="flex-grow p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition duration-300 ease-in-out flex-shrink-0 w-full md:w-auto">
                    Search
                </button>
                {searchTerm && (
                    <button
                        type="button"
                        onClick={handleResetSearch}
                        className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold transition duration-300 ease-in-out flex-shrink-0 w-full md:w-auto"
                    >
                        Clear Search
                    </button>
                )}
            </form>

            {error ? ( // Tampilkan error di sini
                <div className="col-span-full text-center text-red-500 text-xl py-10">
                    {error}
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto px-4">
                        {movies.length > 0 ? (
                            movies.map(movie => (
                                <MovieCard key={movie.id} movie={movie} genresMap={genresMap} />
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-400 text-xl py-10">
                                No movies found.
                            </div>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && ( 
                        <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1 || totalPages === 0}
                                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-indigo-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out"
                            >
                                Previous
                            </button>

                            {renderPageNumbers()} 

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages || totalPages === 0}
                                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-indigo-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Home;