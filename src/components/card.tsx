import React from 'react';
import styles from './card.module.scss';

interface IPropsData {
  title: string;
  description: string;
  icon: string;
  tag: string;
};

const Card = ({app, color}: IPropsData) => (
  <div className={styles.card}>
    <div style={{backgroundImage: `url(${app.banner})`}} className={styles.top} />
    <div className={styles.bottom}>
      <div className={styles.title}>
        <h3 style={{borderColor: color, paddingRight: app.title === 'Record History' ? '4px' : '0'}}>{app.title}</h3>
      </div>
      <p>{app.description}</p>
      <ul className={styles.tools}>
        {app.tools.map((tool, i) => (
          <li key={i} title={tool.name}><img height='24px' src={tool.icon} /></li>
        ))}
      </ul>
      {app.logo ? <img className={styles.logo} src={app.logo} /> : <div className={styles.logo}>placeholder</div>}
      <ul className={styles.links}>
        <li><a href={app.github} target='_blank'><img height='24px' src='github.svg' /></a></li>
        {app.title === 'Emolytics' ? null : <li><a href={app.website} target='_blank'><img height='24px' src='website.svg' /></a></li>}
      </ul>
      <div style={{backgroundColor: color}} className={styles.tag}>{app.tag}</div>
    </div>
  </div>
);

export default Card;