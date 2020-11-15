import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

import SearchInput from '../../components/$Header/SearchInput';
import styles from './Header.scss';

class Header extends Component {
  getSearch = async (event) => {
    const inputValue = event.target.value;
    const { setMoviesCondition, history } = this.props;

    if (inputValue !== '') {
      await setMoviesCondition('Search');
      history.push(`/?search=${inputValue}`);
    }
    else {
      await setMoviesCondition('Trending');
      const { condition } = this.props;
      history.push(`/?filter=${condition}`);
    }
  }

  render() {
    const { location: { search } } = this.props;
    const searchParams = new URLSearchParams(search);
    const inputValue = searchParams.get('search') || '';

    return (
      <header className={styles.header}>
        <h1 className={styles.title}>films</h1>
        <SearchInput getSearch={this.getSearch} inputValue={inputValue} />
      </header>
    );
  }
}

Header.propTypes = {
  setMoviesCondition: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Header.defaultProps = {
  location: PropTypes.shape({
    search: null,
  }),
};

export default withRouter(Header);
