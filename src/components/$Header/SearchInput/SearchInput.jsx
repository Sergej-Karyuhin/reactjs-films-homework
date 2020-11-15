import React from 'react';
import styles from './SearchInput.scss';

import PropTypes from 'prop-types';

const SearchInput = ({ getSearch, inputValue }) => (
  <section className={styles.wrapper}>
    <input
      className={styles.input}
      onChange={e => getSearch(e)}
      value={inputValue}
    />
    <div className={styles.img}></div>
  </section>
);

SearchInput.propTypes = {
  getSearch: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
};

export default SearchInput;
