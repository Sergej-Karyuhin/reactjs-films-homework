import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieInfo from '../../components/$MovieDetails/MovieInfo';
import MovieRating from '../../components/$MovieDetails/MovieRating';
import MovieAction from '../../components/$MovieDetails/MovieAction';
import Preloader from '../../components/Preloader';
import styles from './MovieDetails.scss';

class MovieDetails extends Component {
  componentDidMount() {
    const { location: { pathname }, fetchDetails } = this.props;
    const id = pathname.replace(/\/details\//, '');
    fetchDetails(id);
  }

  componentDidUpdate(prevProps) {
    const { location: { pathname }, fetchDetails } = this.props;
    if (pathname !== prevProps.location.pathname) {
      const id = pathname.replace(/\/details\//, '');
      fetchDetails(id);
    }
  }

  render() {
    const { fetchTrailer, details, error } = this.props;
    const { location: { pathname } } = this.props;
    const id = pathname.replace(/\/details\//, '');

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
            fetchTrailer={fetchTrailer}
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
}

MovieDetails.propTypes = {
  fetchDetails: PropTypes.func.isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    background: PropTypes.string,
    rating: PropTypes.number,
    overview: PropTypes.string,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

MovieDetails.defaultProps = {
  details: null,
  error: null,
};

export default withRouter(MovieDetails);
