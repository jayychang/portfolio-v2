import React from 'react';
import 'Styles/splashpage.less';
import { animateScroll } from 'react-scroll';
import ScrollTyper from 'Components/ScrollTyper.jsx';
import ScrollArrow from 'Components/ScrollArrow.jsx';

export default class SplashPage extends React.Component {
  scrollToNav() {
    let navbarDistance = document.querySelector('#navbar_').getBoundingClientRect().top;
    let navbarHeight = document.querySelector('#navbar_').clientHeight;
    let screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let difference = navbarDistance + navbarHeight - screenHeight;
    if (difference > 0) {
      animateScroll.scrollMore(difference);
    }
  }

  render() {
    return (
      <div id="splashpage_" onClick={this.scrollToNav}>
        <div className="splash sticky_aligner">
          <div className="sticky_content">
            <ScrollTyper />
            <ScrollArrow />
          </div>
        </div>
      </div>
    );
  }
}
