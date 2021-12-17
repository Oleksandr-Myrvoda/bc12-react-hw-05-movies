import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "../../routes/mainRoutes";

import styles from "./MoviesList.module.css";

const MoviesList = ({ movies, location }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <NavLink
              to={{
                pathname: `${routes.movies}/${id}`,
                state: location,
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                width="100"
                alt={title}
              />
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};

export default withRouter(MoviesList);
