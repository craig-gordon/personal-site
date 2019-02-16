import React from 'react';

import styles from './contact.module.scss';

import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub, FaScroll, FaPaperPlane, FaAngleDoubleUp } from 'react-icons/fa';

const Contact = () => (
  <div id='contact' className={styles.container}>
    <h1 className={styles.header}>Contact</h1>
    <div className={styles.logos}>
      <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '1.75em'}}>
        <a href='https://www.linkedin.com/in/craig-gordon/' target='_blank'>
          <div className={`${styles.logoWrapper}`}>
            <FaLinkedinIn />
          </div>
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '1.75em'}}>
        <div className={`${styles.logoWrapper}`}>
          <a href='https://github.com/craig-gordon' target='_blank'>
            <FaGithub />
          </a>
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '1.75em'}}>
        <div className={`${styles.logoWrapper}`}>
          <FaScroll />
        </div>
      </IconContext.Provider>
    </div>
    <h3 className={styles.subheader}><span style={{marginRight: '0.5em'}}>Have a question?</span> <span>Want to work together?</span></h3>
    <form className={styles.form}>
      <input className={styles.one} placeholder='Name' />
      <input className={styles.two} placeholder='Email' />
      <textarea className={styles.three} placeholder='Your message...' rows='5' />
      <div className={styles.sendOuter}>
        <button className={styles.sendInner}>
          <span style={{marginRight: '0.5em'}}>Send</span>
          <FaPaperPlane />
        </button>
      </div>
    </form>
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '2em'}}>
      <div className={`${styles.topButtonWrapper}`}>
        <FaAngleDoubleUp />
      </div>
    </IconContext.Provider>
  </div>
);

export default Contact;