import React from 'react';
import styles from './MovieRating.scss';

function MovieRating(props) {
  const STARS = new Array(Math.round(props.movieRating)).fill();
  return (
    <ul className={styles.stars}>
      {
        STARS.map( (star, index) =>
          <li className={styles.star} key={ index }></li>
        )
      }
    </ul>
  );
}

export default MovieRating;
