import React from 'react';

import Overview from './Overview';
import SkillsChart from './SkillsChart';

import styles from './about.module.scss';

const About = () => (
  <div id='about' className={styles.container}>
    <h1 className='section-header'>About Me</h1>
    <div className={styles.grid}>
      <Overview />
      <SkillsChart />
    </div>
  </div>
);

export default About;