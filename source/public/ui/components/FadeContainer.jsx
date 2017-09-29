import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

export default @observer class FadeContainer extends React.Component {
  @observable opacity = null;

  constructor(props) {
    super(props);
    this.opacity = 0;
    this.handleScroll = this.handleScroll.bind(this);
  }

  static defaultProps = {
    fadeTop: true,
    fadeBottom: true,
  }

  componentDidMount() {
    this.self = ReactDOM.findDOMNode(this);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const topDistance = this.self.getBoundingClientRect().top - document.querySelector('#navbar_').clientHeight;
    const bottomDistance = this.self.getBoundingClientRect().bottom;

    if (bottomDistance > 500 && this.props.fadeTop) {
      const difference = Math.max(0, Math.min((500 - topDistance) / 500, 1));
      this.opacity = difference;
    } else if (bottomDistance <= 500 && this.props.fadeBottom) {
      const difference = Math.max(0, Math.min(bottomDistance / 500, 1));
      this.opacity = difference;
    }
  }

  render() {
    return (
      <div className="fade-container" style={{opacity: this.opacity}}>{this.props.children}</div>
    );
  }
}
