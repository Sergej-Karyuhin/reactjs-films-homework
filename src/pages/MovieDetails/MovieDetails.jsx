import React from 'react';
import styles from './MovieDetails.scss';

import Header from '../../components/Header';
import WatchButton from '../../components/WatchButton';
import InfoButton from '../../components/InfoButton';

const MovieDetails = () => (
  <section className={styles.wrapper}>
    <Header />
    <WatchButton />
    <InfoButton />
  </section>
);

export default MovieDetails;
