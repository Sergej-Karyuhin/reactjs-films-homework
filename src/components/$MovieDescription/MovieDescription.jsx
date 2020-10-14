import React from 'react';
import styles from './MovieDescription.scss';

import movie from '../../assets/mock.js';

import Description from '../Description';
import WatchButton from '../WatchButton';

const MovieDescription = () => (
  <section>
    <Description info={movie[0].description} />

    <div className={styles.wrapper}>
      <WatchButton
        text={'Watch Now'}
        $class={'watch'}
      />
      <div className={styles.info}>
        <WatchButton
          text={'View Info'}
          $class={'view'}
        />
      </div>
    </div>
  </section>
);

export default MovieDescription;
