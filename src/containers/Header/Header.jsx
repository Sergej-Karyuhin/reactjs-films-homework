import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchInput from '../../components/SearchInput';

import styles from './Header.scss';

class Header extends Component {
  state = {
    timerId: null,
  };

  getSearch = (event) => {
    const inputValue = event.target.value;
    const { setMoviesCondition, fetchMovies } = this.props;
    let { timerId } = this.state;

    if (timerId) {
      clearInterval(timerId);
    }

    timerId = setTimeout(
      async () => {
        if (inputValue !== '') {
          await setMoviesCondition('Search');
          const { condition } = this.props;
          fetchMovies(condition, inputValue);
        }
        else {
          await setMoviesCondition('Trending');
          const { condition } = this.props;
          fetchMovies(condition);
        }
      }, 500);

    this.setState({ timerId });
  }

  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>films</h1>
        <SearchInput getSearch={this.getSearch} />
      </header>
    );
  }
}

export default Header;
