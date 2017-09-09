import React from 'react';
import { init } from 'ityped';
import 'Styles/splashpage.less';

export default class SplashPage extends React.Component {
  componentDidMount() {
    init(this.refs.typed, {
      strings:['Jay Chang :)'],
      startDelay: 400,
      backDelay: 3600,
      loop: true
    });
  }
  click() {
    console.log("click header");
  }
  render() {
    return (
      <header className="splashpage_" onClick={this.click}>
        <section className='typed-container'>
          <div><span className='typed-text' ref='typed' /></div>
        </section>
        <div className='scrolll-arrow'>
          <svg width="15.5" height="20.2">
            <path d="M0 12.4l7.8 7.8 7.7-7.8-1-1-6 6V0H7v17.4l-6-6" />
          </svg>
        </div>
      </header>
    );
  }
}
