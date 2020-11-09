import React from 'react';
import styles from './SearchInput.scss';

import PropTypes from 'prop-types';

const SearchInput = ({ setSearchTerm }) => (
  <section className={styles.wrapper}>
    <input
      className={styles.input}
      type="search"
      onChange={e => setSearchTerm(e.target.value)}
    />
    <div className={styles.img}></div>
  </section>
);

SearchInput.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchInput;
