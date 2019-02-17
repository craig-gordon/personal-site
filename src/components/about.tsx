import React from 'react';

import Trait from './Trait';
import SkillsChart from './SkillsChart';

import styles from './about.module.scss';

const About = () => (
  <div id='about' className={styles.container}>
    <div className={styles.grid}>
      <h1 className={`section-header ${styles.header}`}>About</h1>
      <Trait name='Modern' icon='FaCubes' description='I create software using cutting-edge tools with a strong foundation of HTML, CSS, and JavaScript.' />
      <Trait name='Intuitive' icon='FaLightbulb' description='The user is king. I design & develop with the end user experience foremost in mind.' />
      <Trait name='Performant' icon='FaRocket' description='From first paint to smooth UI effects, I optimize every step of the user experience.' />
      <Trait name='Dynamic' icon='FaCogs' description='I harness the power of contemporary frameworks and design to bring static webpages to life.' />
      <div className={styles.bioContainer}>
        <img className={styles.headshot} src='me.png' />
        <h4 className={styles.headshotTag}>Playing Mega Man 2 live during AGDQ '18</h4>
        <p className={styles.blurb}>I create engaging online experiences powered by the latest web technologies. 
        My philosophy in life is to put hard work above all else and never stop improving. 
        In my spare time I am also 
        a <a className={styles.pLink} href='https://www.ign.com/videos/2018/04/29/mega-man-2-world-record-speedrun-in-26-minutes' target='_blank'>world-class speedrunner</a> and 
        Vipassana meditator.</p>
      </div>
      <div className={styles.chartContainer}>
        <SkillsChart />
      </div>
    </div>
  </div>
);

export default About;