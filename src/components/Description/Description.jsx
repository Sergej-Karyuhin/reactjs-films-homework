import React from 'react';
import styles from './Description.scss';

import PropTypes from 'prop-types';

const Description = ({ info }) => (
  <div className={styles.wrapper}>
    <p>{ info }</p>
  </div>
);

Description.propTypes = {
  info: PropTypes.string,
};

export default Description;
