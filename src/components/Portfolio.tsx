import React from 'react';
import Card from './Card';
import styles from './portfolio.module.scss';

import data from '../data/applications';

const colors = [
  'rgb(8, 29, 68)',
  'rgb(34, 94, 168)',
  'rgb(65, 182, 196)',
  'rgb(169, 198, 153)',
  'rgb(255, 255, 217)'
];

const Portfolio = () => (
  <div id='portfolio' className={styles.container}>
    <div className={styles.header}>
      <h1 className='section-header'>APPLICATIONS</h1>
      <div className={styles.headerUnderline} />
    </div>
    <div className={styles.grid}>
      {data.map((app: object, i: number) => <Card key={i} app={app} color={colors[i]} />)}
    </div>
  </div>
);

export default Portfolio;