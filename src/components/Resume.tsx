import React from 'react';
import styles from './resume.module.scss';

interface Props {
  visible: boolean;
  hideResume: () => void;
}

const Resume = (props: Props) =>
  props.visible ? (
    <div className={styles.container} onClick={props.hideResume}>
      <div className={styles.innerContainer}>
        <iframe
          src='resume.pdf#zoom=90'
          height='100%'
          width='100%'
          style={{
            background: 'rgba(0, 0, 0, 0)'
          }}
        />
      </div>
    </div>
  ) : null;

export default Resume;
