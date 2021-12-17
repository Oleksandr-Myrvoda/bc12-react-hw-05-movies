import { useState, useEffect } from "react";
import * as apiService from "../service/apiService";

import Searchbar from "../components/Searchbar";
import MoviesList from "../components/MoviesList";
import queryString from "query-string";

const MoviesPage = ({ location, history }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  const search = queryString.parse(location.search);
  useEffect(() => {
    searchQuery &&
      apiService.movieDetails(search).then((results) => {
        setMovies(results);
      });
  }, []); //React Hook useEffect has missing dependencies: 'search' and 'searchQuery'.

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    apiService
      .search(searchQuery)
      .then((results) => {
        setMovies(results);
      })
      .catch((error) => setError(error.message));

    history.push({
      pathname: history.location.pathname,
      search: `searchQuery=${searchQuery}`,
    });
  };

  // const getPoster = (movies) => {
  //   let poster = emptyImg;
  //   movies.map(({ poster_path }) => {
  //     if (movies.poster_path) {
  //       poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  //     }
  //   });
  //   return movies;
  // };
  // console.log(getPoster());

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
