import React from 'react';
import { Element } from 'react-scroll';

export default class AboutMe extends React.Component {
  render() {
    const styles = {
      'height': '1000px',
      'width': '100%',
    }

    return (
      <section id="aboutme_">
        <Element style={styles} name="AboutMe">
          aboutMe
        </Element>
      </section>
    );
  }
}
