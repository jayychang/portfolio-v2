import React from 'react';
import ScrollArrow from 'Components/ScrollArrow.jsx';
import Work from 'Views/Work.jsx';
import Projects from 'Views/Projects.jsx';
import Skills from 'Views/Skills.jsx';
import AboutMe from 'Views/AboutMe.jsx';
import { scrollSpy } from 'react-scroll';

export default class Content extends React.Component {
  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    return (
      <div id="content_">
        <ScrollArrow />
        <Work />
        <Projects />
        <Skills />
        <AboutMe />
      </div>
    );
  }
}
