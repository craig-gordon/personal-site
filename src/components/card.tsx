import React from 'react';
import styles from './card.module.scss';

interface IPropsData {
  title: string;
  description: string;
  icon: string;
  tag: string;
}

const Card = ({data}: IPropsData) => (
  <div className={styles.card}>
    <div className={styles.top}>
      placeholder
    </div>
    <div className={styles.bottom}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <ul>{data.tools.map((tool, i) => <li key={i}><img height='24px' src={tool.icon} /></li>)}</ul>
      <div className={styles.logo}>placeholder</div>
      <div className={styles.tag}>{data.tag}</div>
    </div>
  </div>
);

export default Card;