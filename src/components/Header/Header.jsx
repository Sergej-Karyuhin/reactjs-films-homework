import React from 'react';
import styles from './Header.scss';

import SearchInput from '../SearchInput';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>films</h1>
    <SearchInput />
  </header>
);

export default Header;
