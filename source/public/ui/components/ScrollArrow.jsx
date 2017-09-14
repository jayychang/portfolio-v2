import React from 'react';

export default class ScrollArrow extends React.Component {
  render() {
    const styles = {
      'position': 'absolute',
      'top': '-80px',
      'left': '50%',
      'transform': 'translateX(-50%)',
    }

    return (
      <div style={styles}>
        <svg width="15.5" height="20.2">
          <path d="M0 12.4l7.8 7.8 7.7-7.8-1-1-6 6V0H7v17.4l-6-6" />
        </svg>
      </div>
    )
  }
}
