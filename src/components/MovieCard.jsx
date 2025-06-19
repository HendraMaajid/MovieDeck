import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline'; // Outline Heart
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';   // Solid Heart

import { useState } from 'react'; // Kita butuh state untuk toggle hover/fav

function MovieCard({ movie }) {
  // Kita akan menggunakan state untuk mensimulasikan apakah movie ini favorit atau tidak
  // Dalam aplikasi nyata, ini biasanya akan datang dari global state management (Context, Redux, dll)
  const [isFavorite, setIsFavorite] = useState(false); 

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite); // Toggle status favorit
    // Anda bisa menambahkan logika untuk menyimpan status favorit ke backend/lokal storage di sini
    console.log(`Movie ${movie.title} is now ${isFavorite ? 'not favorite' : 'favorite'}`);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full relative">
      
      {/* Movie Poster */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
        <img 
          src={movie.url} 
          alt={`${movie.title} poster`} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Favorite Button - positioned absolutely within the main card container */}
      <button 
        onClick={handleFavoriteClick} // Tambahkan onClick handler
        className={`
          absolute top-3 right-3 p-2 rounded-full shadow-md 
          transition-all duration-300 ease-in-out transform hover:scale-110 
          focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 
          z-10
        `}
      >
        {isFavorite ? (
          // Jika favorit, tampilkan ikon hati solid
          <HeartSolidIcon className="h-6 w-6 text-red-400" /> // Hati merah solid
        ) : (
          // Jika tidak favorit, tampilkan ikon hati outline
          <HeartOutlineIcon className="h-6 w-6 text-white group-hover:text-red-400 group-hover:fill-red-400" /> // Hati putih outline, jadi merah saat hover
        )}
      </button>

      {/* Movie Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-indigo-400 mb-2">{movie.title}</h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-3">{movie.description}</p> 
        <div className="text-gray-400 text-sm mt-auto"> 
          <p className="mb-1"><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p className="mb-1"><strong>Rating:</strong> <span className="font-semibold text-yellow-400">{movie.rating}</span></p>
          <p><strong>Genre:</strong> {movie.genre}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;