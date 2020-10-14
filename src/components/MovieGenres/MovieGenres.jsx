import React from 'react';
import styles from './MovieGenres.scss';

import PropTypes from 'prop-types';

const MovieGenres = ({ movieGenres }) => (
  <ul className={styles.genres}>
    {
      movieGenres.map( (genre) =>
        <li className={styles.genre} key={ genre }>
          { genre }
        </li>
      )
    }
  </ul>
);

MovieGenres.propTypes = {
  movieGenres: PropTypes.arrayOf(PropTypes.string),
};

export default MovieGenres;
