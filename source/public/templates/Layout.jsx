import React from 'react';
import NavBar from 'Views/NavBar.jsx';
import SplashPage from 'Views/SplashPage.jsx';
import Content from 'Templates/Content.jsx';
import Footer from 'Views/Footer.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div id="layout_">
        <NavBar />
        <SplashPage />
        <Content />
        <Footer />
      </div>
    );
  }
}
