import React from 'react';
import { Element } from 'react-scroll';

export default class Work extends React.Component {
  render() {
    const styles = {
      'height': '1000px',
      'width': '100%',
      'backgroundColor': 'red',
    }
    
    return (
      <Element style={styles} name="Work">
        Work
      </Element>
    );
  }
}
