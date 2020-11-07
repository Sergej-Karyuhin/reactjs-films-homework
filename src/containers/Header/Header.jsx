import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SearchInput from '../../components/SearchInput';
import useDebounce from './useDebounce';
import styles from './Header.scss';


const Header = ({ setMoviesCondition, fetchMovies, condition }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputValue = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      if (inputValue) {
        setMoviesCondition('Search');
        fetchMovies(condition, inputValue);
      }
    },
    [inputValue]
  );

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>films</h1>
      <SearchInput setSearchTerm={setSearchTerm} />
    </header>
  );
}


Header.propTypes = {
  setMoviesCondition: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
};

export default Header;
