// services/api.js
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (page = 1) => { 
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to fetch popular movies');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return { results: [], total_pages: 0, page: 1 }; 
    }
};

export const searchMovies = async (query, page = 1) => { 
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to search movies');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error searching movies:', error);
        return { results: [], total_pages: 0, page: 1 };
    }
};

export const getGenres = async () => {
    try {
        const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch genres');
        }
        const data = await response.json();
        const genreMap = {};
        data.genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });
        return genreMap;
    } catch (error) {
        console.error('Error fetching genres:', error);
        return {};
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};