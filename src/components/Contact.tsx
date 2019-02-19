import React from 'react';

import styles from './contact.module.scss';

import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub, FaScroll, FaPaperPlane, FaAngleDoubleUp } from 'react-icons/fa';

const Contact = () => (
  <div id='contact' className={styles.container}>
    <div className={styles.header}>
      <h1 className='section-header transform-down hidden' style={{color: 'rgb(228, 228, 228)'}}>CONTACT</h1>
      <div className={`${styles.headerUnderline} transform-down hidden`} />
    </div>
    <div className={styles.logos}>
      <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: `${styles.icon} ${styles.one} hidden`, size: '1.75em'}}>
        <a href='https://www.linkedin.com/in/craig-gordon/' target='_blank' title='Linkedin'>
          <div className={`${styles.logoWrapper}`}>
            <FaLinkedinIn />
          </div>
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: `${styles.icon} ${styles.two} hidden`, size: '1.75em'}}>
        <div className={`${styles.logoWrapper}`}>
          <a href='https://github.com/craig-gordon' target='_blank' title='Github'>
            <FaGithub />
          </a>
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: `${styles.icon} ${styles.three} hidden`, size: '1.75em'}}>
        <div className={`${styles.logoWrapper}`}>
          <a href='#' title='Resume'>
            <FaScroll />
          </a>
        </div>
      </IconContext.Provider>
    </div>
    <h3 className={styles.subheader}>
      <span className={`${styles.subheaderLeft} hidden`} style={{marginRight: '0.5em'}}>Have a question?</span>
      <span className={`${styles.subheaderRight} hidden`}>Want to work together?</span>
    </h3>
    <form className={`${styles.form} hidden`} action="https://formspree.io/contact@craig-gordon.com" method="POST">
      <input placeholder='Name' type='text' name='name' required />
      <input placeholder='Email' type='email' name='_replyto' required />
      <textarea placeholder='Your message' rows='5' type='text' name='message' required />
      <div className={styles.sendOuter}>
        <button className={styles.sendInner} type='submit' value='Send'>
          <span style={{marginRight: '0.5em'}}>Send</span>
          <FaPaperPlane />
        </button>
      </div>
    </form>
    <div className={styles.pageBottomContainer}>
      <IconContext.Provider value={{color: 'rgb(249, 249, 249)', className: styles.topIcon, size: '2em'}}>
        <a
          href='#'
          className={`${styles.topButtonWrapper}`}
          onMouseEnter={() => document.getElementsByClassName(styles.topIcon)[0].classList.add('animated')}
          onMouseLeave={() => document.getElementsByClassName(styles.topIcon)[0].classList.remove('animated')}
        >
          <FaAngleDoubleUp />
        </a>
      </IconContext.Provider>
      <h6>CRAIG GORDON <span className={styles.copyright}>© 2019</span></h6>
    </div>
  </div>
);

export default Contact;