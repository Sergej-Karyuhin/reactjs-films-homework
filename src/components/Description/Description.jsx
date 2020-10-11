import React from 'react';
import styles from './Description.scss';

const Description = ({ info }) => (
  <div className={styles.wrapper}>
    <p>{ info }</p>
  </div>
);

export default Description;
