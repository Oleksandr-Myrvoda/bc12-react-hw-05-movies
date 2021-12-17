import { NavLink } from "react-router-dom";
import routes from "../../routes/mainRoutes";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to={routes.home} exact activeClassName="navLinkActive">
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to={routes.movies} exact activeClassName="navLinkActive">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
