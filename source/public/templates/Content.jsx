import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <div className='scrolll-arrow'>
          <svg width="15.5" height="20.2">
            <path d="M0 12.4l7.8 7.8 7.7-7.8-1-1-6 6V0H7v17.4l-6-6" />
          </svg>
        </div>
        <div className="content_">
          hello
        </div>
      </div>
    );
  }
}
