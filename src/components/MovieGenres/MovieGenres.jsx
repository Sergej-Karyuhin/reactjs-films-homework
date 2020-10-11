import React from 'react';
import styles from './MovieGenres.scss';

const MovieGenres = ({ movieGenres }) => (
  <ul className={styles.genres}>
    {
      movieGenres.map( (genre) =>
        <li className={styles.genre}>{ genre }</li>
      )
    }
  </ul>
);

export default MovieGenres;
