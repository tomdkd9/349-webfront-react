const apiKey = '3821cb0590b13021e1a6be3bb6fd1a34';
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page = 1, searchQuery = '', sortBy = 'popularity.desc') => {
  let url = '';

  if (searchQuery) {
    url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchQuery)}&page=${page}`;
  } else {
    url = `${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=${sortBy}&page=${page}`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

export const imageUrl = 'https://image.tmdb.org/t/p/w500';  