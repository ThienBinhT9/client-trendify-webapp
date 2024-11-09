import React, { memo } from 'react';

import './Empty.scss';

import Header from '../components/Header/index.tsx';
import Footer from '../components/Footer/index.tsx';

const Empty = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Empty;
