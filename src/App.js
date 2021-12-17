import { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MoviesDetailsPage from "./pages/MovieDetailsPage";
import NotFound from "./pages/NotFound";

import routes from "./routes/mainRoutes";
import styles from "./App.module.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <Suspense fallback={<h1>Loadind...</h1>}>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.movieDetails} component={MoviesDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Redirect to={routes.home} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};
export default App;
