import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import NavBar from '../components/navbar';
import SkillsChart from '../components/skillsChart';

export default () => (
  <Layout>
    <Header />
    <NavBar />
    <SkillsChart />
  </Layout>
);