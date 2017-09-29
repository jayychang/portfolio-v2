import React from 'react';
import FadeContainer from 'Components/FadeContainer.jsx';
import { Element } from 'react-scroll'
import 'Styles/skills.less';

export default class Skills extends React.Component {
  render() {
    return (
      <section id="skills_">
        <Element name="Skills">
          <FadeContainer>
            <div style={{height: '1000px', backgroundColor: 'red'}}>
              skills
            </div>
          </FadeContainer>
        </Element>
      </section>
    );
  }
}
