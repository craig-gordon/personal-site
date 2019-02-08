import React from 'react';
import styles from './card.module.scss';

interface IPropsData {
  title: string;
  description: string;
  featured: boolean;
}

const Card = ({data}: IPropsData) => (
  <div className={styles.card}>
    <div className={styles.top}>
      placeholder
    </div>
    <div className={styles.bottomLeft}>
      <div>{data.description}</div>
      <ul>{data.tools.map((tool, i) => <li key={i}>i</li>)}</ul>
    </div>
    <div className={styles.bottomRight}>
      placeholder
    </div>
  </div>
);

export default Card;