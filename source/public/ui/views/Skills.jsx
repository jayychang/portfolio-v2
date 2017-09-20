import React from 'react';
import { Element } from 'react-scroll'

export default class Skills extends React.Component {
  render() {
    const styles = {
      'height': '1000px',
      'width': '100%',
      'backgroundColor': 'orange',
    }
    
    return (
      <Element style={styles} name="Skills">
        Skill
      </Element>
    );
  }
}
