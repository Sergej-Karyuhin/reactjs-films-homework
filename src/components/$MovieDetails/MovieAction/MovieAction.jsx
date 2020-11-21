import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MovieDescription from '../MovieDescription';
import Button from '../../Button';
import styles from './MovieAction.scss';

const MovieAction = ({ description, fetchTrailer, id }) => {
  const [isDescriptionOpened, setDescription] = useState(false);
  return (
    <div className={styles.container}>
      {isDescriptionOpened && <MovieDescription description={description} />}
      <div className={styles.buttonsContainer}>
        <Button
          color="primary"
          onClick={() => fetchTrailer(id)}
        >
          Watch Now
        </Button>

        <Button
          color="secondary"
          onClick={() => setDescription(!isDescriptionOpened)}
        >
          {isDescriptionOpened ? 'Hide Info' : 'View Info'}
        </Button>
      </div>
    </div>
  );
}

MovieAction.propTypes = {
  description: PropTypes.string.isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieAction;
