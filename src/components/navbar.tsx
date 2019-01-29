import React from 'react';
import { Link } from 'gatsby';
import styles from './navbar.module.scss';

const NavBar = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Link to='/' className={styles.link}>About</Link>
      <Link to='/apps' className={styles.link}>Applications</Link>
      <Link to='/skills' className={styles.link}>Skills</Link>
      <Link to='/resume' className={styles.link}>Resume</Link>
      <Link to='/interests' className={styles.link}>Interests</Link>
    </div>
  </div>
);

export default NavBar;