import React from 'react';
import styles from './MovieGenres.scss';

const MovieGenres = ({ movieGenres }) => (
  <ul className={styles.genres}>
    {
      movieGenres.map( (genre, index) =>
        <li className={styles.genre} key={ index }>
          { genre }
        </li>
      )
    }
  </ul>
);

export default MovieGenres;
