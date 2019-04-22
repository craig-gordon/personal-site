import React from 'react';
import styles from './card.module.scss';
import { ApplicationObject } from '../data/applications';

interface Props {
  app: ApplicationObject;
  num: number;
  color: string;
}

const Card = ({ num, app, color }: Props) => (
  <div className={`${styles.card} c${num} hidden`}>
    <div
      style={{ backgroundImage: `url(${app.banner})` }}
      className={styles.top}
    />
    <div className={styles.bottom}>
      <div className={styles.title}>
        <h3
          style={{
            borderColor: color,
            paddingRight: app.title === 'Record History' ? '4px' : '0'
          }}
        >
          {app.title}
        </h3>
      </div>
      <p>{app.description}</p>
      <ul className={styles.tools}>
        {app.tools.map((tool, i) => (
          <li key={i} title={tool.name}>
            <img src={tool.icon} />
          </li>
        ))}
      </ul>
      <ul className={styles.links}>
        <li>
          <a href={app.github} target='_blank' rel='noopener noreferrer'>
            <img height='24px' src='github.svg' />
          </a>
        </li>
        {app.title === 'Emolytics' ? null : (
          <li>
            <a href={app.website} target='_blank' rel='noopener noreferrer'>
              <img height='24px' src='website.svg' />
            </a>
          </li>
        )}
      </ul>
      <div style={{ backgroundColor: color }} className={styles.tag}>
        {app.tag}
      </div>
    </div>
  </div>
);

export default Card;
