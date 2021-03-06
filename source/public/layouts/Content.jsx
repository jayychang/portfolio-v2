import React from 'react';
import NavBar from 'Components/NavBar.jsx';
import Experience from 'Views/Experience.jsx';
import Projects from 'Views/Projects.jsx';
import Skills from 'Views/Skills.jsx';
import AboutMe from 'Views/AboutMe.jsx';
import { scrollSpy } from 'react-scroll';
import 'Styles/content.less';

export default class Content extends React.Component {
  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    return (
      <div id="content_">
        <NavBar />
        <main id="main-content_">
          <Experience />
          <Projects />
          <Skills />
          <AboutMe />
        </main>
      </div>
    );
  }
}
