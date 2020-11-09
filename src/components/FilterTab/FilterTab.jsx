import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterTab.scss';

const FilterTab = ({
  children, fetchByCategory, condition, filter,
}) => {
  const className = condition === children ? `${styles.tab} ${styles.active}` : styles.tab;
  return (
    <button
      type="button"
      className={className}
      data-filter={filter}
      onClick={(e) => fetchByCategory(e.target.dataset.filter)}
    >
      {children}
    </button>
  );
};

FilterTab.propTypes = {
  children: PropTypes.string.isRequired,
  fetchByCategory: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};

export default FilterTab;
