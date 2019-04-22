import React from 'react';

import styles from './sectionBreak.module.scss';

interface Props {
  color: string;
  bgColor: string;
  fadeIn: boolean;
}

const SectionBreak = (props: Props) => (
  <div style={{ backgroundColor: props.bgColor }}>
    <svg
      className={styles.triangle}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 500 500'
      preserveAspectRatio='none'
    >
      <path
        style={{ fill: props.color }}
        className={props.fadeIn ? styles.fadeIn : undefined}
        d='M0 0l253 500L500 0H0z'
      />
    </svg>
  </div>
);

export default SectionBreak;
