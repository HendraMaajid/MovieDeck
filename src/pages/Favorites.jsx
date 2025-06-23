import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getGenres } from "../services/api";
function Favorites(){
    const {favorites} = useMovieContext();
    const [genresMap, setGenresMap] = useState({});

    const fetchGenres = async () => {
        try {
            const fetchedGenres = await getGenres();
            setGenresMap(fetchedGenres);
        }
        catch (error) {
            console.error("Failed to fetch genres:", error);
        }
    }
    useEffect(() => {
        fetchGenres();
    }, []);
    
    if (favorites){
        return (
            <div className="min-h-screen bg-gray-900 text-white py-8 px-4 sm:px-6 md:px-8 lg:px-12">    
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-indigo-400">Your Favorites</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto px-4">
                        {favorites.length > 0 ? (
                            favorites.map(movie => (
                                <MovieCard key={movie.id} movie={movie} genresMap={genresMap} />
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-400 text-xl py-10">
                                No favorites found.
                            </div>
                        )}
                    </div>
            </div>
        )
    }
}
export default Favorites;