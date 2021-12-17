import { useState, useEffect } from "react";
import * as apiService from "../service/apiService";

import MoviesList from "../components/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await apiService.getTrendingMovies();
      setMovies(response);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending this week</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
