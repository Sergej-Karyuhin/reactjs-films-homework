import React from 'react';
import styles from './MovieDuration.scss';

import PropTypes from 'prop-types';

const MovieDuration = ({ movieDuration }) => (
  <p className={styles.duration}>
    { movieDuration }
  </p>
);

MovieDuration.propTypes = {
  movieDuration: PropTypes.string,
};

export default MovieDuration;
