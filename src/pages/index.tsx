import React from 'react';

import About from '../components/About';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import Portfolio from '../components/Portfolio';
import SectionBreak from '../components/SectionBreak';

import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export default () => (
  <Layout>
    <Landing />
    <SectionBreak color='rgb(255, 255, 217)' />
    <About />
    <SectionBreak color='whitesmoke' />
    <Portfolio />
    <SectionBreak color='white' />
  </Layout>
);