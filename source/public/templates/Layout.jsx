import React from 'react';
import SplashPage from 'Views/SplashPage.jsx';
import Footer from 'Views/Footer.jsx';
import Content from 'Templates/Content.jsx'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
      <div className="layout_">
        <div className="background_">
          <SplashPage />
          <Footer />
        </div>
        <div className="foreground_">
          <Content />
        </div>
      </div>
    </div>
    );
  }
}
