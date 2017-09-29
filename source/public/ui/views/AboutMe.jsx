import React from 'react';
import FadeContainer from 'Components/FadeContainer.jsx';
import { Element } from 'react-scroll';
import 'Styles/aboutme.less';

export default class AboutMe extends React.Component {
  render() {
    return (
      <section id="aboutme_">
        <Element name="AboutMe" style={{minHeight: '100vh'}}>
          <FadeContainer fadeBottom={false}>
            <div style={{height: '1000px', backgroundColor: 'red'}}>
              aboutme
            </div>
          </FadeContainer>
        </Element>
      </section>
    );
  }
}
