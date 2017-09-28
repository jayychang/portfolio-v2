import React from 'react';
import { Element } from 'react-scroll';

export default class Work extends React.Component {
  render() {
    const styles = {
      'width': '100%',
      'backgroundColor': 'red',
    }

    return (
      <section id="work_">
        <Element style={styles} name="Work">
          <div className="work-container">
            <div className="item"/>
            <div className="item"/>
            <div className="item"/>
            <div className="item"/>
          </div>
        </Element>
      </section>
    );
  }
}
