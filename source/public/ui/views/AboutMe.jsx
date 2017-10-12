import React from 'react';
import FadeContainer from 'Components/FadeContainer.jsx';
import { Element } from 'react-scroll';
import 'Styles/aboutme.less';
import template from 'Templates/aboutme_template.js';

export default class AboutMe extends React.Component {
  render() {
    return (
      <section id="aboutme_">
        <Element name="AboutMe" style={{minHeight: '100vh'}}>
          <FadeContainer fadeBottom={false}>
            <div>
              <img src={template.image} height="700px" style={{display: 'block', margin: 'auto auto 100px auto'}}/>
              {template.context.map((text, i)=>
                <p>{text}</p>
              )}
            </div>
          </FadeContainer>
        </Element>
      </section>
    );
  }
}
