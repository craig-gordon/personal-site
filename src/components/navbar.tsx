import React from 'react';
import { Link } from 'gatsby';
import styles from './navbar.module.scss';

const NavBar = () => (
  <div className={styles.container}>
    <div className={`${styles.link} ${styles.one}`}>About</div>
    <div className={`${styles.link} ${styles.two}`}>Portfolio</div>
    <div className={`${styles.link} ${styles.three}`}>Interests</div>
    <div className={`${styles.link} ${styles.four}`}>Contact</div>
  </div>
);

export default NavBar;