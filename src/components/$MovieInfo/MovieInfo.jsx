import React from 'react';
import styles from './MovieInfo.scss';

import movie from '../../assets/mock.js';

import MovieName from '../MovieName';
import MovieGenres from '../MovieGenres';
import MovieDuration from '../MovieDuration';
import MovieRating from '../MovieRating';

const MovieInfo = () => (
  <section>
    <MovieName movieName={movie[0].name} />

    <div className={styles.wrapper}>
      <MovieGenres movieGenres={movie[0].genres} />
      <p>|</p>
      <div className={styles.duration}>
        <MovieDuration movieDuration={movie[0].duration} />
      </div>
    </div>

    <div className={styles.rating}>
      <MovieRating movieRating={movie[0].rating} />
    </div>
  </section>
);

export default MovieInfo;
