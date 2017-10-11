import React from 'react';
import FadeContainer from 'Components/FadeContainer.jsx';
import { Element } from 'react-scroll'
import 'Styles/skills.less';
import Icon from 'Components/IconRandomlyMove.jsx';

export default class Skills extends React.Component {
  render() {
    return (
      <section id="skills_">
        <Element name="Skills">
          <FadeContainer>
            <div style={{position: 'relative', height: '1000px', backgroundColor: 'red', margin: '100px'}}>
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
            </div>
          </FadeContainer>
        </Element>
      </section>
    );
  }
}
