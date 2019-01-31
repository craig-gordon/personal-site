import React from 'react';

import About from '../components/about';
import Applications from '../components/applications';
import Landing from '../components/landing';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Landing />
    <About />
    <Applications />
  </Layout>
);