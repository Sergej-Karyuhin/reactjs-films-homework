import React from 'react';
import styles from './SearchInput.scss';

const SearchInput = () => (
  <section className={styles.wrapper}>
    <input className={styles.input} type="search" />
    <div className={styles.img}></div>
  </section>
);

export default SearchInput;
