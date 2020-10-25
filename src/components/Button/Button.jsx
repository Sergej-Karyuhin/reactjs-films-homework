import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

const Button = ({ children, color, onClick }) => (
  <button
    className={`${styles.button} ${styles[color]}`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
