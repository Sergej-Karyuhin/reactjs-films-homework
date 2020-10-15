import React from 'react';
import styles from './MovieName.scss';

import PropTypes from 'prop-types';

const MovieName = ({ movieName }) => (
  <h3 className={styles.title}>
    { movieName }
  </h3>
);

MovieName.propTypes = {
  movieName: PropTypes.string,
};

export default MovieName;
