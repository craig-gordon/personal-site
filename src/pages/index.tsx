import React from 'react';

import Applications from '../components/applications';
import Landing from '../components/landing';
import Layout from '../components/layout';
import NavBar from '../components/navbar';
import SkillsChart from '../components/skillsChart';

export default () => (
  <Layout>
    <Landing />
    <NavBar />
    <Applications />
    <SkillsChart />
  </Layout>
);