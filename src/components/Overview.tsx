import React from 'react';

import Trait from './Trait';

import styles from './overview.module.scss';

const Overview = (props) => (
  <div className={styles.container}>
    <div className={styles.traitsContainer}>
      <Trait name='Cutting-Edge' icon='FaCubes' description='im the best' />
      <Trait name='Performant' icon='FaRocket' description='im also the best' />
      <Trait name='Dynamic' icon='FaCogs' description='im really the best' />
    </div>
    <div className={styles.bioContainer}>
      <p>Lorem Ipsum</p>
    </div>
  </div>
);

export default Overview;