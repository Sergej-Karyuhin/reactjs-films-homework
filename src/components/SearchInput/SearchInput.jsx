import React from 'react';
import styles from './SearchInput.scss';

import PropTypes from 'prop-types';

const SearchInput = ({ getSearch }) => (
  <section className={styles.wrapper}>
    <input
      className={styles.input}
      type="search"
      onChange={(e) => {
        getSearch(e);
      }}
    />
    <div className={styles.img}></div>
  </section>
);

SearchInput.propTypes = {
  getSearch: PropTypes.func.isRequired,
};

export default SearchInput;
