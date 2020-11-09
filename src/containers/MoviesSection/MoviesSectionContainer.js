import { connect } from 'react-redux';

import MoviesSection from './MoviesSection';
import {
  getMoviesCondition, getMovies, getMoviesIsLoading, getMoviesError, getGenres
} from '../../modules/movies/moviesSelector';
import {
  getTrailer, getTrailerIsLoading, getTrailerError, getModalOpened
} from '../../modules/trailer/trailerSelector';
import { setMoviesCondition, fetchMovies } from '../../modules/movies/moviesAction';
import { fetchTrailer, removeTrailerInfo } from '../../modules/trailer/trailerAction';

const mapStateToProps = (state) => ({
  condition: getMoviesCondition(state),
  movies: getMovies(state),
  isLoading: getMoviesIsLoading(state),
  error: getMoviesError(state),
  genres: getGenres(state),

  trailer: getTrailer(state),
  trailerIsLoading: getTrailerIsLoading(state),
  trailerError: getTrailerError(state),
  isModalOpened: getModalOpened(state),
});

const mapDispatchToProps = {
  setMoviesCondition,
  fetchMovies,

  fetchTrailer,
  removeTrailerInfo,
};

export default connect(mapStateToProps,mapDispatchToProps)(MoviesSection);
