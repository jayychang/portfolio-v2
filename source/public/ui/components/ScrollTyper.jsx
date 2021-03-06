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
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll <= 90) {
      const string = 'Scroll Me'; // 9 characters
      const length = string.length;
      const index = Math.min(Math.max(0, length - Math.round(scroll / 10)), length);
      this.string = string.slice(0, index);
    }

    else if (scroll <= 110) {
      this.string = '';
    }

    else if (scroll <= 810) {
      const string = 'Hi I\'m Jay'; // 10 characters
      const length = string.length;
      scroll = scroll - 110 // 700 ( 300, 300, 100)
      if (scroll <= 300) {
        const index = Math.min(Math.max(0, Math.round(scroll / 30)), length);
        this.string = string.slice(0, index);
      } else if (scroll <= 600) {
        this.string = string;
      } else {
        scroll = scroll - 600;
        const index = Math.min(Math.max(0, length - Math.round(scroll / 10)), length);
        this.string = string.slice(0, index);
      }
    }

    else if (scroll <= 830) {
      this.string = '';
    }

    else if (scroll <= 1990) {
      const string = 'I\'m a Software Engineer'; // 23 characters
      const length = string.length;
      scroll = scroll - 830; // 1160 (690 300 170) leave I'm
      if (scroll <= 690) {
        const index = Math.min(Math.max(0, Math.round(scroll / 30)), length);
        this.string = string.slice(0, index);
      } else if (scroll <= 990) {
        this.string = string;
      } else {
        scroll = scroll - 990;
        const index = Math.min(Math.max(6, length - Math.round(scroll / 10)), length);
        this.string = string.slice(0, index);
      }
    }

    else if (scroll <= 2010) {
      this.string = 'I\'m a ';
    }

    else if (scroll <= 3330) {
      const string = 'I\'m a Web and Mobile Developer'; // 30 characters
      const length = string.length;
      scroll = scroll - 2010; // 1320 (720 [24*30] 300 300) start with I'm
      if (scroll <= 720) { // 4 * 10 = 40
        const index = Math.min(Math.max(6, 6 + Math.round(scroll / 30)), length);
        this.string = string.slice(0, index);
      } else if (scroll <= 920) {
        this.string = string;
      } else {
        scroll = scroll - 920;
        const index = Math.min(Math.max(0, length - Math.round(scroll / 10)), length);
        this.string = string.slice(0, index);
      }
    }

    else if (scroll <= 3350) {
      this.string = '';
    }

    else if (scroll <= 4730) {
      const string = 'Keep going to find out more'; // 27 characters
      const length = string.length;
      scroll = scroll - 3350; // 1380 (810 300 270)
      if (scroll <= 810) {
        const index = Math.min(Math.max(0, Math.round(scroll / 30)), length);
        this.string = string.slice(0, index);
      } else if (scroll <= 1110) {
        this.string = string;
      } else {
        scroll = scroll - 1110;
        const index = Math.min(Math.max(0, length - Math.round(scroll / 10)), length);
        this.string = string.slice(0, index);
      }
    }

    else if (scroll <= 4750) {
      this.string = '';
    }

    else { // 4670
      const string = 'Enjoy :)'; // 8 characters
      const length = string.length;
      scroll = scroll - 4750; // 240 (240)
      const index = Math.min(Math.max(0, Math.round(scroll / 30)), length);
      this.string = string.slice(0, index);
    }
  }

  render() {
    return (
      <div className="scroll-typer">
        {this.string}<span className="scroll-typer-cursor">|</span>
      </div>
    );
  }
}
