import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import NavBar from '../components/navbar';
import Applications from '../components/applications';

export default () => (
  <Layout>
    <Header />
    <NavBar />
    <Applications />
  </Layout>
);