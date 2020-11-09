import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import styles from './WatchNowWindow.scss';

const WatchNowWindow = ({ film: { id }, fetchTrailer, switchViewInfo }) => (
  <div className={styles.container}>
    <div className={styles.watchNow}>
      <Button onClick={() => fetchTrailer(id)} color="primary">Watch Now</Button>
    </div>
    <Button onClick={switchViewInfo} color="secondary">View Info</Button>
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
