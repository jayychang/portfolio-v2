import React from 'react';

export default class SplashMask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconSize: 80,
    }
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
    let maxScroll = document.querySelector('#splashpage_').offsetHeight;
    if (scroll < maxScroll) {
      this.setState({
        iconSize: 80 + 300*(scroll/maxScroll),
      });
    }
  }

  render() {
    const styles = {
      'width': '100vw',
      'height': '100vh',
      'position': 'absolute',
    }

    return (
      <svg style={styles}>
        <mask id="mask">
          <rect fill="white" width="100%" height="100%" />
          <circle cx="50%" cy="50%" r={this.state.iconSize} />
        </mask>
        <rect mask="url(#mask)" fill="white" width="100%" height="100%" />
      </svg>
    );
  }
}
