import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCange = (event) => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button className={styles.button} type="submit">
          <span>Search</span>
        </button>
        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleCange}
        />
      </form>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
