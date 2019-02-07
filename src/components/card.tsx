import React from 'react';
import styles from './card.module.scss';

interface IPropsData {
  title: string;
  description: string;
  featured: boolean;
}

const colorMap: object = {
  'database': 'rgba(239, 161, 95, 0.8)',
  'frontend': 'rgba(67, 202, 232, 0.8)',
  'misc': 'rgba(179, 179, 179, 0.8)',
  'server': 'rgba(185, 147, 236, 0.8)',
  'test': 'rgba(255, 130, 130, 0.8)'
}

const Card = ({data}: IPropsData) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <span className={styles.title}>{data.title.toUpperCase()}</span>
    </div>
    <div className={styles.description}>
      <div>{data.description}</div>
      <ul>{data.tools.map((tool, i) => <li key={i} style={{'color': colorMap[tool.type], 'borderColor': colorMap[tool.type]}}>{tool.name}</li>)}</ul>
    </div>
    <div className={styles.imgContainer}>
      <img src={data.image} className={styles.img} />
    </div>
  </div>
);

export default Card;