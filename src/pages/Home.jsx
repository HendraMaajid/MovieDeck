import MovieCard from "../components/MovieCard"
import {useState} from "react";

function Home () {
    const [searchTerm, setSearchTerm] = useState("");

    // Sample movie data
    const movies =[
        {
            id : 1, 
            title: 'Inception',
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
            releaseDate: '2010-07-16',
            rating: '8.8/10',
            genre: 'Sci-Fi',
            url: 'https://example.com/inception.jpg'
        },
        {
            id : 2, 
            title: 'The Dark Knight',
            description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
            releaseDate: '2008-07-18',
            rating: '9.0/10',
            genre: 'Action',
            url: 'https://example.com/dark-knight.jpg'
        },
        {
            id : 3, 
            title: 'Interstellar',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            releaseDate: '2014-11-07',
            rating: '8.6/10',
            genre: 'Adventure',
            url: 'https://example.com/interstellar.jpg'
        }
    ]

    // Filtered movies based on search term
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (event) => {
        event.preventDefault();
        // The filtering now happens automatically through filteredMovies
    }

    return(
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
            </form>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto px-4">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-400 text-xl py-10">No movies found matching your search.</p>
                )}
            </div>
        </div>
    )
}

export default Home;