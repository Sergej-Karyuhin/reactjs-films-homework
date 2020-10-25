import React from 'react';
import PropTypes from 'prop-types';

import FilterTab from '../FilterTab';

import styles from './FilterTabs.scss';

const FilterTabs = (props) => {
  const { genres, fetchByCategory, condition } = props;
  const defaultValue = Number(condition) ? condition : 'Genre';
  const className = Number(condition) ? `${styles.select} ${styles.active}` : styles.select;

  let options;

  if (genres) {
    options = genres.map((genre, index) => (
      <option
        key={genre}
        value={index}
      >
        {genre}
      </option>
    ));
  }

  return (
    <div className={styles.container}>
      <FilterTab fetchByCategory={fetchByCategory} condition={condition} filter="Trending">
        Trending
      </FilterTab>
      <FilterTab fetchByCategory={fetchByCategory} condition={condition} filter="Top Rated">
        Top Rated
      </FilterTab>
      <FilterTab fetchByCategory={fetchByCategory} condition={condition} filter="Coming soon">
        Coming soon
      </FilterTab>
      <select
        className={className}
        name="Genre"
        defaultValue={defaultValue}
        onChange={(e) => fetchByCategory(e.target.value)}
      >
        <option value="Genre" disabled hidden>Genre</option>
        {options}
      </select>
    </div>
  );
};

FilterTabs.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchByCategory: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
};

export default FilterTabs;
