import React from 'react';
import ScrollArrow from 'Components/ScrollArrow.jsx';
import 'Styles/content.less';

export default class Content extends React.Component {
  render() {
    return (
      <div id="content_">
        <ScrollArrow />
        <div >
          CONTENT
        </div>
      </div>
    );
  }
}
