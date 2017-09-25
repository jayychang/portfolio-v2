import React from 'react';
import { init } from 'ityped';
import 'Styles/splashpage.less';
import { animateScroll } from 'react-scroll';
import SplashMask from 'Components/SplashMask.jsx';

export default class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1/4,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    init(this.refs.typed, {
      strings:['Jay Chang :)'],
      startDelay: 400,
      backDelay: 3600,
      loop: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scroll = event.srcElement.body.scrollTop;
    let maxScroll = document.querySelector('#splashpage_').offsetHeight;
    if (scroll < maxScroll) {
      this.setState({
        scale: 1/4 + (scroll / (4 * maxScroll)),
      });
    }
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
      'transform': `scale(${this.state.scale}, ${this.state.scale})`,
    }

    return (
      <div id="splashpage_" onClick={this.scrollToNav}>
        <div className="splash sticky_aligner">
          <div className="sticky_content">
            <div className="typed-container" style={styles}>
              <div><span className="typed-text" ref="typed" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
