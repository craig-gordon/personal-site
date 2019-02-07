import React from 'react';
import Card from './Card';
import styles from './portfolio.module.scss';

import data from '../data/applications';

const Portfolio = () => (
  <div id='portfolio' className={styles.container}>
    <div className={styles.grid}>
      {data.map((datum: object, i: number) => <Card key={i} data={datum} />)}
    </div>
  </div>
);

export default Portfolio;