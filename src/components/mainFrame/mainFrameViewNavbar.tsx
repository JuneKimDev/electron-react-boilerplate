import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mainFrame.module.scss';

const View = () => {
  return (
    <nav className={styles.navbarVertical}>
      <Link to="/">
        <i className="fas fa-home" />
      </Link>
    </nav>
  );
};

export default View;
