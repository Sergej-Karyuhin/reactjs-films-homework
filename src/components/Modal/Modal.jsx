import React from 'react';
import PropTypes from 'prop-types';

import Preloader from '../Preloader';

import styles from './Modal.scss';

const Modal = ({ trailer, removeTrailerInfo, trailerIsLoading, trailerError }) => {
  if (trailerIsLoading) {
    return (
      <div className={styles.container}>
        <Preloader />
      </div>
    );
  }

  if (trailerError) {
    return (
      <div className={styles.container}>
        <div className={styles.message}>
          {`Error! ${trailerError.message}`}
        </div>
        <button className={styles.close} type="button" onClick={removeTrailerInfo}>&#215;</button>
      </div>
    );
  }

  if (trailer) {
    return (
      <div className={styles.container}>
        <iframe
          className={styles.iframe}
          title="trailer"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder="0"
          allowFullScreen
        />
        <button className={styles.close} type="button" onClick={removeTrailerInfo}>&#215;</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        Trailer not found
      </div>
      <button className={styles.close} type="button" onClick={removeTrailerInfo}>&#215;</button>
    </div>
  );
};

Modal.defaultProps = {
  trailer: null,
  trailerError: null,
};

export default Modal;
