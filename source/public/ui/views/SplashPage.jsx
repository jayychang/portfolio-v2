import React from 'react';
import { init } from 'ityped';
import 'Styles/splashpage.less';
import { animateScroll } from 'react-scroll';
import SplashMask from 'Components/SplashMask.jsx';

export default class SplashPage extends React.Component {
  componentDidMount() {
    init(this.refs.typed, {
      strings:['Jay Chang :)'],
      startDelay: 400,
      backDelay: 3600,
      loop: true,
    });
  }

  scrollToNav() {
    let navbarDistance = document.querySelector('#navbar_').getBoundingClientRect().top;
    let navbarHeight = document.querySelector('#navbar_').clientHeight;
    let screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let difference = navbarDistance + navbarHeight - screenHeight;
    if (difference > 0) {
      animateScroll.scrollMore(difference, { duration: 500 });
    }
  }

  render() {
    const styles = {
      'backgroundColor': 'green',
    }

    return (
      <div id="splashpage_" style={styles} onClick={this.scrollToNav}>
        <div className="splash sticky_aligner">
          <div className="sticky_content">
            <SplashMask />
            <div className="typed-container">
              <div><span className="typed-text" ref="typed" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
