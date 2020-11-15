import React from 'react';
import PropTypes from 'prop-types';

import Preloader from '../../Preloader';
import ErrorBoundary from '../../_ErrorBoundary';

import styles from './Modal.scss';

const Modal = ({ trailer, removeTrailerInfo, trailerIsLoading, trailerError }) => {
  return (
    <div>

    {trailerIsLoading ?
      <div className={styles.container}>
        <Preloader />
      </div>

      : trailer ?

      <ErrorBoundary>
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
      </ErrorBoundary>

      :

      <div className={styles.container}>
        <div className={styles.message}>
          Trailer not found
        </div>
        <button className={styles.close} type="button" onClick={removeTrailerInfo}>&#215;</button>
      </div>
    }
    </div>
  )
};

Modal.propTypes = {
  trailer: PropTypes.shape({
    key: PropTypes.string,
  }),
  removeTrailerInfo: PropTypes.func.isRequired,
  trailerIsLoading: PropTypes.bool.isRequired,
  trailerError: PropTypes.shape({
    message: PropTypes.string,
  }),
};

Modal.defaultProps = {
  trailer: null,
  trailerError: null,
};

export default Modal;
