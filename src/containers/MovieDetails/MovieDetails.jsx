import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

import MovieInfo from '../../components/$MovieDetails/MovieInfo';
import MovieRating from '../../components/$MovieDetails/MovieRating';
import MovieAction from '../../components/$MovieDetails/MovieAction';
import Preloader from '../../components/Preloader';
import styles from './MovieDetails.scss';
import { fetchDetails } from '../../modules/details/detailsAction';
import { fetchTrailer } from '../../modules/trailer/trailerAction';

const MovieDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.details.isLoading);
  const error = useSelector(state => state.details.error);
  const details = useSelector(state => state.details.details);
  const { pathname } = location;
  const id = pathname.replace(/\/details\//, '');

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [pathname]);

  if (error) {
    return (
      <section
        className={styles.container}
      >
        {`Error! ${error.message}`}
      </section>
    );
  }

  if (details) {
    const { background, rating, overview, ...info } = details;
    const img = { backgroundImage: `url(${background})` };
    return (
      <section
        className={styles.container}
        style={img}
      >
        <div className={styles.info}>
          <MovieInfo info={info} />
          <MovieRating rating={rating} />
        </div>
        <MovieAction
          description={overview}
          id={id}
          fetchTrailer={() => dispatch(fetchTrailer(id))}
        />
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <Preloader />
    </section>
  );

}

export default MovieDetails;
