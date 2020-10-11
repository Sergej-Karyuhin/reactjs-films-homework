import React from 'react';
import styles from './MovieRating.scss';

function MovieRating(props) {
  const STARS = new Array(Math.round(props.movieRating)).fill();
  const RATING = props.movieRating;
  return (
    <ul className={styles.stars}>
      {
        STARS.map( (star, index) =>
          <li className={styles.star} key={ index }></li>
        )
      }
      <div className={styles.rating}>{ RATING }</div>
    </ul>
  );
}

export default MovieRating;
