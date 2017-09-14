import React from 'react';
import ScrollArrow from 'Components/ScrollArrow.jsx';

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <ScrollArrow />
        <div className="content_">
          hello
        </div>
      </div>
    );
  }
}
