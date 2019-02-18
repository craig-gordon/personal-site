import React from 'react';

import { IconContext } from 'react-icons';
import { FaCogs, FaCubes, FaLightbulb, FaRocket } from 'react-icons/fa';

import styles from './trait.module.scss';

const iconMap = {
  FaCubes: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '3.5em'}}>
      <div className={`${styles.iconWrapper} ${styles.one}`}>
        <FaCubes />
      </div>
    </IconContext.Provider>
  ),
  FaLightbulb: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '3.5em'}}>
      <div className={`${styles.iconWrapper} ${styles.two}`}>
        <FaLightbulb />
      </div>
    </IconContext.Provider>
  ),
  FaRocket: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '3.5em'}}>
      <div className={`${styles.iconWrapper} ${styles.three}`}>
        <FaRocket />
      </div>
    </IconContext.Provider>
  ),
  FaCogs: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '3.5em'}}>
      <div className={`${styles.iconWrapper} ${styles.four}`}>
        <FaCogs />
      </div>
    </IconContext.Provider>
  )
};

const Trait = (props) => (
  <div className={`${styles.container} hidden`}>
    {iconMap[props.icon]}
    <h2 className={styles.label}>{props.name}</h2>
    <div className={styles.description}>{props.description}</div>
  </div>
);

export default Trait;