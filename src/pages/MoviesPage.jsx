import { useState, useEffect } from "react";
import * as apiService from "../service/apiService";

import Searchbar from "../components/Searchbar";
import MoviesList from "../components/MoviesList";
import queryString from "query-string";

const MoviesPage = ({ location, history }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const { searchQuery } = queryString.parse(location.search);

  const handleSearch = (searchQuery) => {
    history.push({
      pathname: history.location.pathname,
      search: `searchQuery=${searchQuery}`,
    });
  };

  useEffect(() => {
    if (!searchQuery) return;
    const searchMovie = () => {
      apiService
        .search(searchQuery)
        .then((results) => {
          setMovies(results);
        })
        .catch((error) => setError(error.message));
    };
    searchMovie();
  }, [searchQuery]);

  return (
    <>
      <Searchbar onSubmit={handleSearch} input={searchQuery} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
