import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from '../MovieItem';

import styles from './MovieList.scss';

const MovieList = ({ movies, fetchTrailer }) => {
  return (
    <div className={styles.container}>
      {movies.length
        ? movies.map(film =>
          <MovieItem key={film.id} film={film} fetchTrailer={fetchTrailer} />
        )
        : <p className={styles.noResults}>No results</p>}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTrailer: PropTypes.func.isRequired,
};

export default MovieList;
