import React from 'react';
import styles from './MovieDuration.scss';

const MovieDuration = ({ movieDuration }) => (
  <p className={styles.duration}>
    { movieDuration }
  </p>
);

export default MovieDuration;
