import React from 'react'
import styles from './WatchButton.scss';

import PropTypes from 'prop-types';

const WatchButton = ({ text, $class }) => (
  <button
    className={styles.button + ` ${styles[$class]}`}
  >
    { text }
  </button>
);

WatchButton.propTypes = {
  text: PropTypes.string,
  $class: PropTypes.string,
};

export default WatchButton;
