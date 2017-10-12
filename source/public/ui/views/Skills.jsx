import React from 'react';
import FadeContainer from 'Components/FadeContainer.jsx';
import { Element } from 'react-scroll'
import 'Styles/skills.less';
import Icon from 'Components/IconRandomlyMove.jsx';
import icons from 'Templates/skills_icon_template.js';

export default class Skills extends React.Component {
  render() {
    return (
      <section id="skills_">
        <Element name="Skills">
          <FadeContainer>
            <div className="skill-icon-container">
              {icons.map((item, i) =>
                <Icon key={i} icon={item.icon} />
              )}
            </div>
            <div>
              this is where I talk about my skills
            </div>
          </FadeContainer>
        </Element>
      </section>
    );
  }
}
