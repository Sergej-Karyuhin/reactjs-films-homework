import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieRating.scss';

const MovieRating = ({ rating }) => {
  const STARS = new Array(Math.round(rating / 2)).fill().map(item => Math.round(Math.random() * 9999));
  return (
    <ul className={styles.stars}>
      {
        STARS.map( (star) =>
          <li className={styles.star} key={ star }></li>
        )
      }
      <div className={styles.rating}>{ rating }</div>
    </ul>
  );
}

MovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default MovieRating;
