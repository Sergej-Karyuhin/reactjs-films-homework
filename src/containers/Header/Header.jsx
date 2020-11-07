import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchInput from '../../components/SearchInput';

import styles from './Header.scss';


const Header = ({ setMoviesCondition, fetchMovies, condition }) => {
  let [timerId, setTimer] = useState(null);

  const getSearch = (event) => {
    const inputValue = event.target.value;
    if (timerId) {
      clearInterval(timerId);
    }
    timerId = setTimeout(
      async () => {
        if (inputValue !== '') {
          await setMoviesCondition('Search');
          fetchMovies(condition, inputValue);
        }
        else {
          await setMoviesCondition('Trending');
          fetchMovies(condition);
        }
      }, 500);
  }

  useState(timerId);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>films</h1>
      <SearchInput getSearch={() => getSearch(event)} />
    </header>
  );
}


Header.propTypes = {
  setMoviesCondition: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
};

export default Header;
