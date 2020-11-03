import React from 'react';

import styles from './Preloader.scss';

const LINES = new Array(12).fill().map(line => Math.round(Math.random() * 9999));

const Preloader = () => (
  <div className={styles.container}>
    <div className={styles.lds}>
      {LINES.map(line => <div key={ line }/>)}
    </div>
  </div>
);

export default Preloader;
