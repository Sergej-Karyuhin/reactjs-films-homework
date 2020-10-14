import React from 'react';
import styles from './MovieRating.scss';

import PropTypes from 'prop-types';

const MovieRating = ({ movieRating }) => {
  const STARS = new Array(Math.round(movieRating)).fill().map(item => Math.round(Math.random() * 9999));
  return (
    <ul className={styles.stars}>
      {
        STARS.map( (star) =>
          <li className={styles.star} key={ star }></li>
        )
      }
      <div className={styles.rating}>{ movieRating }</div>
    </ul>
  );
}

MovieRating.propTypes = {
  movieRating: PropTypes.number,
};

export default MovieRating;
