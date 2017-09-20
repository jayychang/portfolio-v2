import React from 'react';
import { Element } from 'react-scroll';

export default class Projects extends React.Component {
  render() {
    const styles = {
      'height': '1000px',
      'width': '100%',
      'backgroundColor': 'green',
    }

    return (
      <Element style={styles} name="Projects">
        Projects
      </Element>
    );
  }
}
