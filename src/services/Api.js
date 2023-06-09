import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'efefe08e94bd9ee9cf1ab3405d7246aa';

export const getTrendingMovies = async () => {
  const responce = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return responce.data;
};

export const getMovieDetails = async movieId => {
  const responce = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return responce.data;
};

export const getMovieCast = async movieId => {
  const responce = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return responce.data.cast;
};

export const getMovieReviews = async movieId => {
  const responce = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  console.log(responce);
  return responce.data.results;
};

export const getSearchedMovie = async query => {
  const responce = await axios.get(
    `search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`
  );
  console.log(responce);
  return responce.data.results;
};