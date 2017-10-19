import React from 'react';
import 'Styles/footer.less';
import ClickableIcon from 'Components/ClickableIcon.jsx';
import icons from 'Templates/footer_icons_template.js';

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer_">
        <FooterContent />
      </footer>
    );
  }
}

class FooterContent extends React.Component {
  render() {
    return (
      <div className="footer-content">
        <div className="flex-container">
          {icons.map((icon, i) =>
            <ClickableIcon key={i} url={icon.url} icon={icon.icon} size="320px" />
          )}
        </div>
      </div>
    );
  }
}
