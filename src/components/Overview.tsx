import React from 'react';

import Trait from './Trait';

import styles from './overview.module.scss';

const Overview = (props) => (
  <div className={styles.container}>
    <div className={styles.traitsContainer}>
      <Trait name='Modern' icon='FaCubes' description='I love creating software using cutting-edge tools with a strong foundation of HTML/CSS/JavaScript.' />
      <Trait name='Intuitive' icon='FaLightbulb' description='The user is king. I design & develop with the end user experience foremost in mind.' />
      <Trait name='Performant' icon='FaRocket' description='From first paint to smooth hover effects, I optimize every step of the user experience.' />
      <Trait name='Dynamic' icon='FaCogs' description='I harness the power of modern JavaScript + CSS to bring static webpages to life.' />
    </div>
    <div className={styles.bioContainer}>
      <img className={styles.headshot} src='me.png' />
      <h4>Me speedrunning Mega Man 2 live during AGDQ '18</h4>
      <p>I create engaging online experiences powered by the latest web technologies. My philosophy in life is to put hard work above all else and never stop improving. In my spare time I am also a passionate speedrunner and Vipassana meditator.</p>
    </div>
  </div>
);

export default Overview;