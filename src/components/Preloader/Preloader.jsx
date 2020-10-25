import React from 'react';

import styles from './Preloader.scss';

const Preloader = () => (
  <div className={styles.container}>
    <div className={styles.lds}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Preloader;
