import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieList from '../../components/$MoviesSection/MovieList';
import Modal from '../../components/$MoviesSection/Modal';
import FilterTabs from '../../components/$MoviesSection/FilterTabs';
import Preloader from '../../components/Preloader';
import styles from './MoviesSection.scss';

class MoviesSection extends Component {
  async componentDidMount() {
    const { location: { search } } = this.props;
    const { fetchMovies, setMoviesCondition } = this.props;
    const searchParams = new URLSearchParams(search);

    const inputValue = searchParams.get('search');
    const filter = searchParams.get('filter');
    const genreId = searchParams.get('genreId');

    if (filter || genreId) {
      await setMoviesCondition(filter || genreId);
    }

    if (inputValue) {
      await setMoviesCondition('Search');
    }

    const { condition } = this.props;
    fetchMovies(condition, inputValue);
  }


  fetchByFilter = async (filter) => {
    const { setMoviesCondition, genres, fetchMovies } = this.props;
    fetchMovies(filter, genres);
    await setMoviesCondition(filter);
  };


  componentDidUpdate(prevProps) {
    const { location: { search } } = this.props;
    const { condition, fetchMoviesDebounced } = this.props;

    if (search !== prevProps.location.search) {
      const searchParams = new URLSearchParams(search);

      const inputValue = searchParams.get('search');
      const filter = searchParams.get('filter');
      const genreId = searchParams.get('genreId');

      if (inputValue) {
        fetchMoviesDebounced(condition, inputValue);
      }

      if (filter) {
        this.fetchByFilter(filter);
      }

      if (genreId) {
        this.fetchByFilter(genreId);
      }
    }
  }


  render() {
    const {
      error, isLoading, isModalOpened, trailer, removeTrailerInfo,
      trailerIsLoading, trailerError, genres, condition, movies,
      fetchTrailer, removeDetailsInfo, setMoviesCondition, history,
    } = this.props;

    if (error) {
      return (
        <div className={styles.container}>{`Error! ${error.message}`}</div>
      );
    }

    if (isLoading) {
      return (
        <div className={styles.container}>
          <FilterTabs
            genres={genres}
            condition={condition}
            onFilterChange={history.push}
          />
          <Preloader />
        </div>
      );
    }

    return (
      <section className={styles.container}>
        {isModalOpened ? (
          <Modal
            trailer={trailer}
            removeTrailerInfo={removeTrailerInfo}
            trailerIsLoading={trailerIsLoading}
            trailerError={trailerError}
          />
        )
          : null }
        <FilterTabs
          genres={genres}
          condition={condition}
          onFilterChange={history.push}
        />
        <MovieList
          movies={movies}
          fetchTrailer={fetchTrailer}
          removeDetailsInfo={removeDetailsInfo}
          setMoviesCondition={setMoviesCondition}
          onClick={history.push}
        />
      </section>
    );
  }
}


MoviesSection.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  condition: PropTypes.string.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  fetchMoviesDebounced: PropTypes.func.isRequired,
  removeTrailerInfo: PropTypes.func.isRequired,
  trailer: PropTypes.shape({}),
  trailerError: PropTypes.shape({}),
  trailerIsLoading: PropTypes.bool.isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  setMoviesCondition: PropTypes.func.isRequired,
  removeDetailsInfo: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MoviesSection.defaultProps = {
  error: null,
  trailer: null,
  trailerError: null,
  location: PropTypes.shape({
    search: null,
  }),
};

export default withRouter(MoviesSection);
