import React from 'react';

import styles from './contact.module.scss';

import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub, FaScroll, FaPaperPlane, FaAngleDoubleUp } from 'react-icons/fa';

const Contact = () => (
  <div id='contact' className={styles.container}>
    <div className={styles.header}>
      <h1 className='section-header' style={{color: 'rgb(228, 228, 228)'}}>CONTACT</h1>
      <div className={styles.headerUnderline} />
    </div>
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
    <form className={styles.form} action="https://formspree.io/contact@craig-gordon.com" method="POST">
      <input placeholder='Name' type='text' name='name' />
      <input placeholder='Email' type='email' name='_replyto' />
      <textarea placeholder='Your message...' rows='5' type='text' name='message' />
      <div className={styles.sendOuter}>
        <button className={styles.sendInner} type='submit' value='Send'>
          <span style={{marginRight: '0.5em'}}>Send</span>
          <FaPaperPlane />
        </button>
      </div>
    </form>
    <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.icon, size: '2em'}}>
      <a href='#' className={`${styles.topButtonWrapper}`}>
        <FaAngleDoubleUp />
      </a>
    </IconContext.Provider>
  </div>
);

export default Contact;