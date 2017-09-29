import React from 'react';
import 'Styles/splashpage.less';
import { animateScroll } from 'react-scroll';
import ScrollTyper from 'Components/ScrollTyper.jsx';
import ScrollArrow from 'Components/ScrollArrow.jsx';

export default class SplashPage extends React.Component {
  scrollToNav() {
    const navbarDistance = document.querySelector('#navbar_').getBoundingClientRect().top;
    const navbarHeight = document.querySelector('#navbar_').clientHeight;
    const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const difference = navbarDistance + navbarHeight - screenHeight;
    if (difference > 0) {
      animateScroll.scrollMore(difference);
    }
  }

  render() {
    return (
      <header id="splashpage_" onClick={this.scrollToNav}>
        <div className="splash sticky-aligner">
          <div className="sticky-content">
            <ScrollTyper />
            <ScrollArrow />
          </div>
        </div>
      </header>
    );
  }
}
