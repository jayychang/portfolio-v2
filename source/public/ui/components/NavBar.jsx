import React from 'react';
import 'Styles/navbar.less';
import Navigation from 'Views/Navigation.jsx';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="nav sticky-aligner">
        <div className="sticky-content">
          <nav id="navbar_">
            <Navigation />
          </nav>
        </div>
      </div>
    );
  }
}
