import React from 'react';
import SplashPage from 'Layouts/SplashPage.jsx';
import Content from 'Layouts/Content.jsx';
import Footer from 'Views/Footer.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div id="layout_">
        <SplashPage />
        <Content />
        <Footer />
      </div>
    );
  }
}
