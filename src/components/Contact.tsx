import React from 'react';

import styles from './contact.module.scss';

import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => (
  <div id='contact' className={styles.container}>
    <h1 className={styles.header}>Contact</h1>
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
  </div>
);

export default Contact;