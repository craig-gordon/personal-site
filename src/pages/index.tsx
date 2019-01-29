import React from 'react';

import Applications from '../components/applications';
import Header from '../components/header';
import Layout from '../components/layout';
import NavBar from '../components/navbar';

export default () => (
  <Layout>
    <Header />
    <NavBar />
    <Applications />
  </Layout>
);