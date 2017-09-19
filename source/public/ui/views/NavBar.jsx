import React from 'react';
import 'Styles/navbar.less';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
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
    let distance = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let offset = distance - scroll;
    if (offset <= 0 && this.state.sticky == false) {
      this.setState({
        sticky: true,
      });
    } else if (offset > 0 && this.state.sticky == true) {
      this.setState({
        sticky: false,
      });
    }
  }

  render() {
    return (
      <nav id="navbar_" className={ this.state.sticky ? "sticky" : null }>
        NAVBAR
      </nav>
    );
  }
}
