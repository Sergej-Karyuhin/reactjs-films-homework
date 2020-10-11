import React from 'react';
import styles from './MovieName.scss';

const MovieName = ({ movieName }) => (
  <h3 className={styles.title}>
    { movieName }
  </h3>
);

export default MovieName;
