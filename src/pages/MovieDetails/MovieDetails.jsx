import React from 'react';
import styles from './MovieDetails.scss';

import movie from '../../assets/mock.js';

import Header from '../../components/Header';
import WatchButton from '../../components/WatchButton';
import InfoButton from '../../components/InfoButton';
import Description from '../../components/Description';
import MovieName from '../../components/MovieName';
import MovieGenres from '../../components/MovieGenres';
import MovieDuration from '../../components/MovieDuration';
import MovieRating from '../../components/MovieRating';

const MovieDetails = () => (
  <section className={styles.wrapper}>

    <Header />

    <main className={styles.main}>
      <section>
        <MovieName movieName={movie[0].name} />
        <div className={styles.genresAndDuration}>
          <div><MovieGenres movieGenres={movie[0].genres} /></div>
          <p>|</p>
          <div><MovieDuration movieDuration={movie[0].duration} /></div>
        </div>
        <MovieRating movieRating={movie[0].rating} />
      </section>

      <section>
        <div className={styles.description}><Description info={movie[0].description} /></div>
        <div className={styles.buttons}>
          <div className={styles.watchButton}><WatchButton /></div>
          <InfoButton />
        </div>
      </section>
    </main>

  </section>
);

export default MovieDetails;
