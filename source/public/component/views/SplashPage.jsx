import React from 'react';
import { init } from 'ityped';
import '../../style/splashpage.less';

export default class SplashPage extends React.Component {
  componentDidMount() {
    init(this.refs.ityped, {
      strings:['Jay Chang :)'],
      startDelay: 400,
      backDelay: 3600,
      loop: true
    });
  }

  render() {
    return (
      <div className="splashpage_">
        <section className='splashpage'>
          <div><span className='typed' ref='ityped' /></div>
        </section>
        <div className='scrolller'>
          <svg width="15.5" height="20.2">
            <path d="M0 12.4l7.8 7.8 7.7-7.8-1-1-6 6V0H7v17.4l-6-6" />
          </svg>
        </div>
      </div>
    );
  }
}
