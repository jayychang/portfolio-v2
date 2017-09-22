import React from 'react';
import NavBar from 'Components/NavBar.jsx';
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
        <NavBar />
        <div className="main_content">
          <Work />
          <Projects />
          <Skills />
          <AboutMe />
        </div>
      </div>
    );
  }
}
