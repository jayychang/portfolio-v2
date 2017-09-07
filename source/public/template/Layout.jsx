import React from 'react';
import SplashPage from '../component/views/SplashPage.jsx';
import Footer from '../component/views/Footer.jsx';
import Content from './Content.jsx'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <SplashPage />
        <Content />
        <Footer />
      </div>
    );
  }
}
