import React from 'react';

import { IconContext } from 'react-icons';
import { FaCogs, FaCubes, FaLightbulb, FaRocket } from 'react-icons/fa';

import styles from './trait.module.scss';

const iconMap = {
  FaCubes: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '4em'}}>
      <div className={`${styles.iconWrapper} ${styles.one}`}>
        <FaCubes />
      </div>
    </IconContext.Provider>
  ),
  FaLightbulb: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '4em'}}>
      <div className={`${styles.iconWrapper} ${styles.two}`}>
        <FaLightbulb />
      </div>
    </IconContext.Provider>
  ),
  FaRocket: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '4em'}}>
      <div className={`${styles.iconWrapper} ${styles.three}`}>
        <FaRocket />
      </div>
    </IconContext.Provider>
  ),
  FaCogs: (
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '4em'}}>
      <div className={`${styles.iconWrapper} ${styles.four}`}>
        <FaCogs />
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