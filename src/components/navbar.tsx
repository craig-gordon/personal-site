import React from 'react';
import styles from './navbar.module.scss';

const NavBar = (props) => (
  <div className={`${styles.container}${props.fixed ? ' ' + styles.fixed : ''}`}>
    <h5 className={`${styles.link} ${styles.one}${props.current === 0 ? ' ' + styles.current : ''}`}>
      <a href='#'>Home</a>
    </h5>
    <h5 className={`${styles.link} ${styles.two}${props.current === 1 ? ' ' + styles.current : ''}`}>
      <a href='#about'>About</a>
    </h5>
    <h5 className={`${styles.link} ${styles.three}${props.current === 2 ? ' ' + styles.current : ''}`}>
      <a href='#portfolio'>Portfolio</a>
    </h5>
    <h5 className={`${styles.link} ${styles.four}${props.current === 3 ? ' ' + styles.current : ''}`}>
      <a href='#contact'>Contact</a>
    </h5>
  </div>
);

export default NavBar;