import React from 'react';
import { Link } from 'gatsby';
import styles from './navbar.module.scss';

const NavBar = (props) => (
  <div className={`${styles.container}${props.fixed ? ' ' + styles.fixed : ''}`}>
    <h5 className={`${styles.link} ${styles.one}`}>
      <a href='#about'>About</a>
    </h5>
    <h5 className={`${styles.link} ${styles.two}`}>
      <a href='#portfolio'>Portfolio</a>
    </h5>
    <h5 className={`${styles.link} ${styles.three}`}>Interests</h5>
    <h5 className={`${styles.link} ${styles.four}`}>Contact</h5>
  </div>
);

export default NavBar;