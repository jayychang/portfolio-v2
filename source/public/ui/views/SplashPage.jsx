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
    let scroll = document.body.scrollTop;
    let navbarHeight = document.querySelector('#navbar_').clientHeight;
    let difference = navbarHeight - scroll;
    if (difference > 0) {
      animateScroll.scrollMore(difference, { duration: 500 });
    }
  }

  render() {
    return (
      <div id="splashpage_" onClick={this.scrollToNav}>
        <div className="sticky_aligner">
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
