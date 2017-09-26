import React from 'react';
import Layout from 'Layouts/Layout.jsx';

export default class App extends React.Component {
  componentDidMount() {
    const loadingScreen = document.querySelector('#loadingScreen_')
    if(loadingScreen) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        loadingScreen.classList.add('on')
        setTimeout(() => {
          loadingScreen.outerHTML = '';
        }, 500);
      }, 2000);
    }
  }

  render() {
    return (
      <Layout />
    );
  }
}
