import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

import SearchInput from '../../components/$Header/SearchInput';
import styles from './Header.scss';

const Header = ({ setMoviesCondition, condition }) => {
  let history = useHistory();
  let location = useLocation();

  const getSearch = async (event) => {
    const inputValue = event.target.value;
    if (inputValue !== '') {
      await setMoviesCondition('Search');
      history.push(`/?search=${inputValue}`);
    }
    else {
      await setMoviesCondition('Trending');
      const condition = condition;
      history.push(`/?filter=${condition}`);
    }
  }

  const { search } = location;
  const searchParams = new URLSearchParams(search);
  const inputValue = searchParams.get('search') || '';

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>films</h1>
      <SearchInput getSearch={getSearch} inputValue={inputValue} />
    </header>
  );
}

Header.propTypes = {
  setMoviesCondition: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
};

export default Header;
