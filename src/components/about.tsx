import React from 'react';
import styles from './about.module.scss';
import Trait from './Trait';
import SkillsChart from './SkillsChart';

const About = () => (
  <div id='about' className={styles.container}>
    <div className={styles.grid}>
      <div className={styles.header}>
        <h1 className='section-header hidden'>ABOUT</h1>
        <div className={`${styles.headerUnderline} hidden`} />
      </div>
      <Trait
        name='Modern'
        icon='FaCubes'
        description='I utilize cutting-edge tools with a strong foundation of HTML, CSS, and JS.'
      />
      <Trait
        name='Intuitive'
        icon='FaLightbulb'
        description='I design & develop with the end user foremost in mind.'
      />
      <Trait
        name='Performant'
        icon='FaRocket'
        description='From first paint to smooth animations, I optimize every step of the UX.'
      />
      <Trait
        name='Dynamic'
        icon='FaCogs'
        description='I employ contemporary frameworks & design to bring static pages to life.'
      />
      <div className={`${styles.bioContainer} hidden`}>
        <img className={styles.headshot} src='me.png' />
        <h4 className={styles.headshotTag}>
          Playing Mega Man 2 live during AGDQ &#39;18
        </h4>
        <p className={styles.blurb}>
          Hi, I&#39;m Craig. I founded and am actively developing{' '}
          <a
            className={styles.pLink}
            href='https://recordhistory.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Record History
          </a>
          . My philosophy in life is to put hard work above all else and never
          stop improving. In my spare time I am a{' '}
          <a
            className={styles.pLink}
            href='https://www.ign.com/videos/2018/04/29/mega-man-2-world-record-speedrun-in-26-minutes'
            target='_blank'
            rel='noopener noreferrer'
          >
            world-class speedrunner
          </a>{' '}
          and Vipassana meditator.
        </p>
      </div>
      <div className={`${styles.chartContainer} hidden`}>
        <SkillsChart />
      </div>
    </div>
  </div>
);

export default About;
