import React, { memo } from 'react';

//Functions
import './Main.scss';

//Components
import Header from '../components/Header/index.tsx';
import Footer from '../components/Footer/index.tsx';
import Sidebar from '../components/Sidebar/index.tsx';

const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="content-right">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
