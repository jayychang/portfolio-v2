import React from 'react';
import { animateScroll} from 'react-scroll';

export default class ScrollArrow extends React.Component {
  scrollToNav() {
    let scroll = document.body.scrollTop;
    let navbarHeight = document.querySelector('#navbar_').clientHeight;
    let difference = navbarHeight - scroll;
    if (difference > 0) {
      animateScroll.scrollMore(difference, {duration: 500});
    }
  }

  render() {
    const styles = {
      'position': 'absolute',
      'top': '-100px',
      'left': '50%',
      'transform': 'translateX(-50%)',
    }

    return (
      <div style={styles} onClick={this.scrollToNav}>
        <svg width="15.5" height="20.2">
          <path d="M0 12.4l7.8 7.8 7.7-7.8-1-1-6 6V0H7v17.4l-6-6" />
        </svg>
      </div>
    );
  }
}
