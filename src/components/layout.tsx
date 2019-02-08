import React from 'react';
import './layout.scss';

const Layout = ({ children }) => (
  <div className='layout'>
    { children }
  </div>
);

export default Layout;