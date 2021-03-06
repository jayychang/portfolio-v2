import React from 'react';
import { Element } from 'react-scroll';
import ExperienceItem from 'Components/ExperienceItem.jsx';
import FadeContainer from 'Components/FadeContainer.jsx';
import 'Styles/experience.less';
import template from 'Templates/experience_template.js';

export default class Experience extends React.Component {
  render() {
    return (
      <section id="experience_">
        <Element name="Experience">
          <FadeContainer>
            <div className="experience-grid">
              {template.map((item, i) =>
                <ExperienceItem key={i} image={item.image} logo={item.logo} url={item.url} />
              )}
            </div>
          </FadeContainer>
        </Element>
      </section>
    );
  }
}
