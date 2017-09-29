import React from 'react';
import FadeContainer from 'Components/FadeContainer.jsx';
import { Element } from 'react-scroll';
import 'Styles/projects.less';

export default class Projects extends React.Component {
  render() {
    return (
      <section id="projects_">
        <Element name="Projects">
          <FadeContainer>
            <div style={{height: '1000px'}}>
              Projects
            </div>
          </FadeContainer>
        </Element>
        <div className="bottom-gradient" />
      </section>
    );
  }
}
