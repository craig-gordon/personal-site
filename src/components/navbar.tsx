import React from 'react';
import { Link } from 'gatsby';
import styles from './navbar.module.scss';

const NavBar = () => (
  <div className={styles.container}>
    <div className={`${styles.link} ${styles.one}`}>
      <a href='#about'>About</a>
    </div>
    <div className={`${styles.link} ${styles.two}`}>
      <a href='#portfolio'>Portfolio</a>
    </div>
    <div className={`${styles.link} ${styles.three}`}>Interests</div>
    <div className={`${styles.link} ${styles.four}`}>Contact</div>
  </div>
);

export default NavBar;