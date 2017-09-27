import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

export default @observer class ScrollTyper extends React.Component {
  @observable string = null;

  constructor(props) {
    super(props);
    this.string = 'Scroll Me';
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scroll = event.srcElement.body.scrollTop;
    if (scroll <= 90) {
      const string = 'Scroll Me'; // 9 characters
      const length = string.length;
      const index = Math.min(Math.max(0, length - Math.round(scroll / 10)), length);
      this.string = string.slice(0, index);
    }

    else if (scroll <= 110) {
      this.string = '';
    }

    else if (scroll <= 710) {
      const string = 'Hi I\'m Jay'; // 10 characters
      const length = string.length;
      scroll = scroll - 110 // 600 ( 300, 200, 100)
      if (scroll <= 300) {
        const index = Math.min(Math.max(0, Math.round(scroll / 30)), length);
        this.string = string.slice(0, index);
      } else if (scroll <= 500) {
        this.string = string;
      } else {
        scroll = scroll - 500;
        const index = Math.min(Math.max(0, length - Math.round(scroll / 10)), length);
        this.string = string.slice(0, index);
      }
    }

    else if (scroll <= 730) {
      this.string = '';
    }

    else if (scroll <= 1850) {
      const string = 'I\'m a Software Engineer' // 23 characters
      const length = string.length;
      scroll = scroll - 730; // 1120 (690 200 230)
      if (scroll <= 690) {
        const index = Math.min(Math.max(0, Math.round(scroll / 30)), length);
        this.string = string.slice(0, index);
      } else if (scroll <= 890) {
        this.string = string;
      } else {
        scroll = scroll - 890;
        const index = Math.min(Math.max(0, length - Math.round(scroll / 10)), length);
        this.string = string.slice(0, index);
      }
    }

    else if (scroll <= 1870) {
      this.string = '';
    }

    else if (scroll <= 3030) {
      const string = 'Web and Mobile Developer' // 24 characters
      const length = string.length;
      scroll = scroll - 1870; // 1160 (720 200 240)
      if (scroll <= 720) {
        const index = Math.min(Math.max(0, Math.round(scroll / 30)), length);
        this.string = string.slice(0, index);
      } else if (scroll <= 920) {
        this.string = string;
      } else {
        scroll = scroll - 920;
        const index = Math.min(Math.max(0, length - Math.round(scroll / 10)), length);
        this.string = string.slice(0, index);
      }
    }

    else if (scroll <= 3050) {
      this.string = '';
    }

    else if (scroll <= 4330) {
      const string = 'Keep going to find out more' // 27 characters
      const length = string.length;
      scroll = scroll - 3050; // 1280 (810 200 270)
      if (scroll <= 810) {
        const index = Math.min(Math.max(0, Math.round(scroll / 30)), length);
        this.string = string.slice(0, index);
      } else if (scroll <= 1010) {
        this.string = string;
      } else {
        scroll = scroll - 1010;
        const index = Math.min(Math.max(0, length - Math.round(scroll / 10)), length);
        this.string = string.slice(0, index);
      }
    }

    else if (scroll <= 4350) {
      this.string = '';
    }

    else { // 4670
      const string = 'Enjoy :)' // 8 characters
      const length = string.length;
      scroll = scroll - 4350; // 240 (240)
      const index = Math.min(Math.max(0, Math.round(scroll / 30)), length);
      this.string = string.slice(0, index);
    }
  }

  render() {
    return (
      <div className="scroll-typer-container">
        {this.string}<span className="scroll-typer-cursor">|</span>
      </div>
    );
  }
}
