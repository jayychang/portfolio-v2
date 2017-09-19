import React from 'react';
import { init } from 'ityped';
import 'Styles/splashpage.less';

export default class SplashPage extends React.Component {
  componentDidMount() {
    init(this.refs.typed, {
      strings:['Jay Chang :)'],
      startDelay: 400,
      backDelay: 3600,
      loop: true,
    });
  }

  render() {
    return (
      <div id="splashpage_">
        <div className="typed-container">
          <div><span className="typed-text" ref="typed" /></div>
        </div>
      </div>
    );
  }
}
