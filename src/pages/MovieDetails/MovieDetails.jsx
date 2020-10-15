import React from 'react';
import styles from './MovieDetails.scss';

import movie from '../../assets/mock.js';

import Header from '../../components/Header';
import MovieInfo from '../../components/$MovieInfo';
import MovieDescription from '../../components/$MovieDescription';

const MovieDetails = () => (
  <section className={styles.wrapper}>
    <Header />
    <div className={styles.movie}>
      <MovieInfo />
      <MovieDescription />
    </div>
  </section>
);

export default MovieDetails;
