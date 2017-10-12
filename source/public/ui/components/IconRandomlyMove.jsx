import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

const minTimer = 6000;
const maxTimer = 11000;

export default @observer class IconRandomlyMove extends React.Component {
  @observable topPosition = null;
  @observable leftPosition = null;
  @observable opacity = null;
  @observable zIndex = null;
  @observable lock = null;
  @observable count = null;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.lock = false;
    this.setNewPosition(); // Initial position and time
    this.move = setInterval(() => this.timer(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.move);
  }

  timer() {
    this.zIndex -= this.count;
    if (this.count * 500 > this.randomTime && this.lock == false) {
      this.opacity = 0;
      this.lock = true;
      setTimeout(() => {
        this.lock = false;
        this.setNewPosition();
      }, 850);
    }
    this.count++;
  }

  setNewPosition() {
    this.zIndex = 0; // Overlay on top
    this.count = 1;

    this.topPosition = Math.floor(Math.random() * 100);
    this.leftPosiition = Math.floor(Math.random() * 100);

    this.opacity = 1; // Set opacity after new position and zindex is set
    this.randomTime = Math.floor(Math.random() * (maxTimer - minTimer)) + minTimer;
  }

  render() {
    const styles = {
      position: 'absolute',
      top: this.topPosition+'%',
      left: this.leftPosiition+'%',
      zIndex: this.zIndex + 800,
      opacity: this.opacity,
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.8s ease',
    }

    return (
      <img style={styles} src={this.props.icon} />
    );
  }
}
