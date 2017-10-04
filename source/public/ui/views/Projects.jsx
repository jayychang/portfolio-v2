import React from 'react';
import FadeContainer from 'Components/FadeContainer.jsx';
import ProjectItem from 'Components/ProjectItem.jsx';
import { Element } from 'react-scroll';
import 'Styles/projects.less';
import template from 'Templates/projects_template.js';

export default class Projects extends React.Component {
  render() {
    return (
      <section id="projects_">
        <Element name="Projects">
          <FadeContainer>
            <div className="projects-grid">
              {template.map((item, i) =>
                <ProjectItem key={i} image={item.image} title={item.title} description={item.description} url={item.url} />
              )}
            </div>
          </FadeContainer>
        </Element>
      </section>
    );
  }
}
