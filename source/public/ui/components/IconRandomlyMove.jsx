import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

const minTimer = 4000;
const maxTimer = 9000;

export default @observer class IconRandomlyMove extends React.Component {
  @observable topPosition = null;
  @observable leftPosition = null;
  @observable opacity = null;
  @observable zIndex = null;

  componentDidMount() {
    this.parent = ReactDOM.findDOMNode(this).parentNode;
    this.zIndex = 0; // Overlay new ontop of old
    this.randomPosition(); // Initial position
    this.randomTime = Math.floor(Math.random() * (maxTimer - minTimer)) + minTimer;
    this.move = setInterval(() => this.timer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.move);
  }

  timer() {
    this.zIndex--;
    if (this.zIndex * 1000 <= -this.randomTime) {
      this.opacity = 0;
      setTimeout(() => {
        this.zIndex = 0;
        this.randomPosition();
        this.opacity = 1;
      }, 850);
    }
  }

  randomPosition() {
    let maxHeight = this.parent.clientHeight;
    this.topPosition = Math.floor(Math.random() * (maxHeight));
    let maxWidth = this.parent.clientWidth;
    this.leftPosiition = Math.floor(Math.random() * (maxWidth));
  }

  render() {
    const style = {
      position: 'absolute',
      top: this.topPosition,
      left: this.leftPosiition,
      zIndex: this.zIndex + 700,
      opacity: this.opacity,
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.8s ease',
      width: '100px',
      height: '100px',
      backgroundColor: 'blue',
    }

    return (
      <div style={style}>
        My skill
      </div>
    );
  }
}
