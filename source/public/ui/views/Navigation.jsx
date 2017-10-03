import React from 'react';
import { Link } from 'react-scroll';

export default class Navigation extends React.Component {
  render() {
    const styles = {
      height: '100%',
      width: '100%',
      zIndex: '990',
    }

    return (
      <div style={styles} className="flex-container">
        <Link to="Experience" activeClass="inView" smooth={true} duration={500} spy={true} spy={true} offset={-80} className="flex-item navItem">Experience</Link>
        <Link to="Projects" activeClass="inView" smooth={true} duration={500} spy={true} offset={-80} className="flex-item navItem">Work & Projects</Link>
        <Link to="Skills" activeClass="inView" smooth={true} duration={500} spy={true} offset={-80} className="flex-item navItem">Skills</Link>
        <Link to="AboutMe" activeClass="inView" smooth={true} duration={500} spy={true} offset={-80} className="flex-item navItem">About Me</Link>
      </div>
    );
  }
}
