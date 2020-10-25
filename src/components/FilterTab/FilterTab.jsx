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

export default FilterTab;
