import React from 'react';
import 'Styles/navbar.less';
import Navigation from 'Views/Navigation.jsx';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="sticky_aligner">
        <div className="sticky_content">
          <nav id="navbar_">
            <Navigation />
          </nav>
        </div>
      </div>
    );
  }
}
