import React, { ReactNode } from 'react';
import './layout.scss';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className='layout'>{children}</div>
);

export default Layout;
