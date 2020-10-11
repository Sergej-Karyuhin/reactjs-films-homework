import React from 'react';
import styles from './MovieDetails.scss';

import movie from '../../assets/mock.js';

import Header from '../../components/Header';
import WatchButton from '../../components/WatchButton';
import InfoButton from '../../components/InfoButton';
import Description from '../../components/Description';

const MovieDetails = () => (
  <section className={styles.wrapper}>

    <Header />

    <section>
      <div className={styles.description}><Description info={movie[0].description} /></div>
      <div className={styles.buttons}>
        <div className={styles.watchButton}><WatchButton /></div>
        <InfoButton />
      </div>
    </section>
    
  </section>
);

export default MovieDetails;
