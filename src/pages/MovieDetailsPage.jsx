import { useState, useEffect, lazy } from "react";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import * as apiService from "../service/apiService";
import routes from "../routes/mainRoutes";
import styles from "./PagesStyles.module.css";

const Cast = lazy(() => import("../components/Cast")); //webpackChunkName: "cast"
const Reviews = lazy(() => import("../components/Reviews")); //webpackChunkName: "reviews"

const MoviesDetailsPage = ({ match, history, location }) => {
  const [title, setTitle] = useState(null);
  const [release_date, setRelease_date] = useState(null);
  const [vote_average, setVote_average] = useState(null);
  const [overview, setOverview] = useState(null);
  const [genres, setGenres] = useState([]);
  const [poster_path, setPoster_path] = useState(null);

  useEffect(() => {
    const movieData = async () => {
      const { movieId } = match.params;
      const response = await apiService.movieDetails(movieId);
      const { genres, overview, poster_path, title, vote_average } = response;

      setTitle(title);
      setRelease_date(release_date);
      setVote_average(vote_average);
      setOverview(overview);
      setGenres(genres);
      setPoster_path(poster_path);
    };
    movieData();
  }, [match.params, release_date]);

  const handleGoBack = () => {
    history.push(location?.state?.from || routes.home);
  };

  return (
    <section>
      <button className={styles.button} type="button" onClick={handleGoBack}>
        Go back
      </button>

      <h1>{title}</h1>
      <div className={styles.movieCard}>
        <img
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={title}
        />
        <div className={styles.cardText}>
          <h2>Rating: {vote_average * 10}%</h2>
          <p>{overview}</p>
          <ul>
            {genres.map(({ id, name }) => (
              <li className={styles.genresList} key={id}>
                {name},
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className={styles.reviewList}>
        <li className={styles.navItem}>
          <NavLink
            to={{
              pathname: `${match.url}/cast`,
              state: { from: location.state?.from, id: match.params.movieId },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              state: { from: location.state?.from, id: match.params.movieId },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${match.url}/cast`} component={Cast} />
      </Switch>
      <Route exact path={`${match.url}/reviews`} component={Reviews} />
    </section>
  );
};

export default MoviesDetailsPage;
