import React from 'react';
import 'Styles/footer.less';
import ClickableIcon from 'Components/ClickableIcon.jsx'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
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
    let distance = event.srcElement.body.scrollTop;
    if (distance < 400 && this.state.isHidden === false) {
      console.log("false");
      this.setState({
        isHidden: true,
      });
    } else if (distance > 400 && this.state.isHidden === true){
      this.setState({
        isHidden: false,
      });
      console.log("true");
    }
  }

  render() {
    return (
      <footer>
        {!this.state.isHidden && <FooterContent />}
      </footer>
    );
  }
}

class FooterContent extends React.Component {
  render() {
    return (
      <div className='footer_'>
        <ClickableIcon url='https://github.com/jayychang' icon={require('Assets/icons/github-icon.png')} />
      </div>
    )
  }
}
