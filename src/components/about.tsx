import React from 'react';

import Trait from './Trait';
import SkillsChart from './SkillsChart';

import styles from './about.module.scss';

const About = () => (
  <div id='about' className={styles.container}>
    <div className={styles.grid}>
      <h1 className={`section-header ${styles.header}`}>About</h1>
      <Trait name='Modern' icon='FaCubes' description='I love creating software using cutting-edge tools with a strong foundation of HTML, CSS, and JavaScript.' />
      <Trait name='Intuitive' icon='FaLightbulb' description='The user is king. I design & develop with the end user experience foremost in mind.' />
      <Trait name='Performant' icon='FaRocket' description='From first paint to smooth hover effects, I optimize every step of the user experience.' />
      <Trait name='Dynamic' icon='FaCogs' description='I harness the power of contemporary frameworks and design to bring static webpages to life.' />
      <div className={styles.bioContainer}>
        <img className={styles.headshot} src='me.png' />
        <h4 className={styles.headshotTag}>Me playing Mega Man 2 live during AGDQ '18</h4>
        <p className={styles.blurb}>I create engaging online experiences powered by the latest web technologies. My philosophy in life is to put hard work above all else and never stop improving. In my spare time I am also a passionate speedrunner and Vipassana meditator.</p>
      </div>
      <div className={styles.chartContainer}>
        <SkillsChart />
      </div>
    </div>
  </div>
);

export default About;