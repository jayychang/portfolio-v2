import React from 'react';
import 'Styles/footer.less';
import ClickableIcon from 'Components/ClickableIcon.jsx';
import icons from 'Templates/footer_icons_template.js';

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
    let scroll = event.srcElement.body.scrollTop;
    let distance = document.querySelector('#splashpage_').offsetHeight;
    let offset = distance - scroll;

    if (offset > 0 && this.state.isHidden === false) {
      this.setState({
        isHidden: true,
      });
    } else if (offset < 0 && this.state.isHidden === true){
      this.setState({
        isHidden: false,
      });
    }
  }

  render() {
    return (
      <footer className={this.state.isHidden? "hidden" : null}>
        <FooterContent />
      </footer>
    );
  }
}

class FooterContent extends React.Component {
  render() {
    return (
      <div id="footer_">
        <div className="footer-content">
          <div className="flex-container">
            { icons.map((icon, i) =>
              <ClickableIcon key={i} url={icon.url} icon={icon.icon} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
