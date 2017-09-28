import React from 'react';
import { Element } from 'react-scroll';
import 'Styles/projects.less';

export default class Projects extends React.Component {
  render() {
    return (
      <section id="projects_">
        <Element name="Projects">
          <div style={{height: '1000px'}}>
            Projects
          </div>
        </Element>
        <div className="bottom-gradient" />
      </section>
    );
  }
}
