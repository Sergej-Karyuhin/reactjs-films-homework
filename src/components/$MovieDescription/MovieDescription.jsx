import React from 'react';
import styles from './MovieDescription.scss';

import movie from '../../assets/mock.js';

import Description from '../Description';
import WatchButton from '../WatchButton';
import InfoButton from '../InfoButton';

const MovieDescription = () => (
  <section>
    <Description info={movie[0].description} />

    <div className={styles.wrapper}>
      <WatchButton />
      <div className={styles.info}><InfoButton /></div>
    </div>
  </section>
);

export default MovieDescription;
