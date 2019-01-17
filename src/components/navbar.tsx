import React from 'react';
import styles from './navbar.module.scss';

const NavBar = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div>About</div>
      <div>Applications</div>
      <div>Resume</div>
      <div>Interests</div>
    </div>
  </div>
);

export default NavBar;