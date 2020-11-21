import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import styles from './WatchNowWindow.scss';

const WatchNowWindow = ({ switchViewInfo, film: { id }, fetchTrailer }) => (
  <div className={styles.container}>
    <Button
      onClick={() => fetchTrailer(id)}
      color="primary"
    >
      Watch Now
    </Button>

    <div className={styles.viewInfo}>
    <Button
      onClick={switchViewInfo}
      color="secondary"
    >
      View Info
    </Button>
    </div>
  </div>
);

WatchNowWindow.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  switchViewInfo: PropTypes.func.isRequired,
};

export default WatchNowWindow;
