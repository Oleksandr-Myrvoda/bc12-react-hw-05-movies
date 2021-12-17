import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "1db5479ca98fac1ae129bcbe15cc6182";

export const getTrendingMovies = () =>
  axios
    .get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(({ data }) => data.results)
    .catch((error) => error);

export const search = (searchQuery = "") =>
  axios
    .get(`${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}`)
    .then(({ data }) => data.results)
    .catch((error) => error);

export const movieDetails = (movieId) =>
  axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(({ data }) => data)
    .catch((error) => error);

export const Cast = (movieId) =>
  axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(({ data }) => data.cast)
    .catch((error) => error);

export const Reviews = (movieId) =>
  axios
    .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(({ data }) => data.results)
    .catch((error) => error);
