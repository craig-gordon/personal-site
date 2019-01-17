import React from 'react';
import styles from './card.module.scss';

interface IPropsData {
  title: string;
  description: string;
  featured: boolean;
}

const colorMap: object = {
  'database': 'rgba(239, 161, 95, 0.8)',
  'deployment': 'rgba(179, 179, 179, 0.8)',
  'frontend': 'rgba(67, 202, 232, 0.8)',
  'server': 'rgba(185, 147, 236, 0.8)',
}

const Card = ({data}: IPropsData) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <span className={styles.title}>{data.title.toUpperCase()}</span>
    </div>
    <div className={styles.description}>
      <div>{data.description}</div>
      <ul>{data.tools.map(tool => <li style={{'color': colorMap[tool.type], 'border-color': colorMap[tool.type]}}>{tool.name}</li>)}</ul>
    </div>
  </div>
);

export default Card;