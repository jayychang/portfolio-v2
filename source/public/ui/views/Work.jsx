import React from 'react';
import { Element } from 'react-scroll';
import ContentItem from 'Components/ContentItem.jsx';
import FadeContainer from 'Components/FadeContainer.jsx';
import 'Styles/work.less';
import template from 'Templates/work_template.js';

export default class Work extends React.Component {
  render() {
    return (
      <section id="work_">
        <Element name="Work">
          <FadeContainer>
            <div className="work-grid">
              {template.map((item, i) =>
                <ContentItem key={i} image={item.image} logo={item.logo} url={item.url} />
              )}
            </div>
          </FadeContainer>
        </Element>
      </section>
    );
  }
}
