import React from 'react';
import { Element } from 'react-scroll'

export default class Skills extends React.Component {
  render() {
    const styles = {
      'height': '1000px',
      'width': '100%',
      'backgroundColor': '#f7f7f7',
    }

    return (
      <section id="skills_">
        <Element style={styles} name="Skills">
          Skill
        </Element>
      </section>
    );
  }
}
