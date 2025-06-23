import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline'; 
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';   
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({ movie, genresMap }) {
  const {isFavorite, addFavorite, removeFavorite} = useMovieContext();
  const favorite = isFavorite(movie.id);
  const handleFavoriteClick = (e) => {
      e.preventDefault()
      if (favorite) {
          removeFavorite(movie.id);
      } else {
          addFavorite(movie);
      }
  };

    // Fungsi untuk mendapatkan nama genre dari ID
  const getGenreNames = (genreIds) => {
      if (!genreIds || genreIds.length === 0 || !genresMap) {
          return "N/A";
      }
      return genreIds.map(id => genresMap[id]).filter(name => name).join(', ');
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full relative">
      
      {/* Movie Poster */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={`${movie.title} poster`} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Favorite Button */}
      <button 
        onClick={handleFavoriteClick} 
        className={`
          absolute top-3 right-3 p-2 rounded-full shadow-md 
          transition-all duration-300 ease-in-out transform hover:scale-110 
          focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 
          z-10 bg-gray-700 hover:bg-gray-600 group
        `}
      >
        {favorite ? (
          <HeartSolidIcon className="h-6 w-6 text-red-400" /> 
        ) : (
          <HeartOutlineIcon className="h-6 w-6 text-white group-hover:text-red-400 group-hover:fill-red-400" /> 
        )}
      </button>

      {/* Movie Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-indigo-400 mb-2">{movie.title}</h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-3">{movie.overview}</p> 
        <div className="text-gray-400 text-sm mt-auto"> 
          <p className="mb-1"><strong>Release Date:</strong> {movie.release_date}</p>
          <p className="mb-1"><strong>Rating:</strong> <span className="font-semibold text-yellow-400">{movie.vote_average?.toFixed(1)}</span></p>
          <p><strong>Genre:</strong> {getGenreNames(movie.genre_ids)}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;