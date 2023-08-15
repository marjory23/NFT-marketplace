import React from 'react';
import Header from './Header';


const Layout = ({ children }) => {




  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;