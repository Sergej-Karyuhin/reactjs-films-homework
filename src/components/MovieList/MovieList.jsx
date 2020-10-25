import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from '../MovieItem';

import styles from './MovieList.scss';

const MovieList = ({ movies, fetchTrailer }) => {
  const movieItems = movies.map((film) => (
    <MovieItem key={film.id} film={film} fetchTrailer={fetchTrailer} />
  ));

  return (
    <div className={styles.container}>
      {movieItems.length
        ? movieItems
        : <p className={styles.noResults}>No results</p>}
    </div>
  );
};

export default MovieList;
