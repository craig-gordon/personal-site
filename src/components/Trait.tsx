import React from 'react';

import { IconContext } from 'react-icons';
import { FaCogs, FaCubes, FaRocket } from 'react-icons/fa';

import styles from './trait.module.scss';

const iconMap = {
  FaCogs: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '4em'}}>
      <div className={`${styles.iconWrapper} ${styles.three}`}>
        <FaCogs />
      </div>
    </IconContext.Provider>
  ),
  FaCubes: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '4em'}}>
      <div className={`${styles.iconWrapper} ${styles.one}`}>
        <FaCubes />
      </div>
    </IconContext.Provider>
  ),
  FaRocket: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '4em'}}>
      <div className={`${styles.iconWrapper} ${styles.two}`}>
        <FaRocket />
      </div>
    </IconContext.Provider>
  )
};

const Trait = (props) => (
  <div className={styles.container}>
    {iconMap[props.icon]}
    <h2>{props.name}</h2>
    <div>{props.description}</div>
  </div>
);

export default Trait;