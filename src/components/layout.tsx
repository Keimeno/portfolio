import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => (
  <main>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@300;400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    {children}
  </main>
);

export default Layout;
