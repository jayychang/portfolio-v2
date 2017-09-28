import React from 'react';
import { Element } from 'react-scroll';
import Content from 'Components/ContentItem.jsx';
import template from 'Templates/work_template.js';
import 'Styles/work.less';

export default class Work extends React.Component {
  render() {
    return (
      <section id="work_">
        <Element name="Work">
          <div />
          <div className="work-grid">
            {template.map((item, i) =>
              <Content key={i} image={item.image} logo={item.logo} url={item.url} size="320px" />
            )}
          </div>
        </Element>
      </section>
    );
  }
}
