import React from 'react';

export default class ClickableIcon extends React.Component {
  constructor(props) {
    super(props);
    this.openLink = this.openLink.bind(this);
  }

  openLink() {
    const link = this.props.url;
    if (/^mailto:/.test(link)) {
      window.location = link;
    } else {
      window.open(link);
    }
  }

  render() {
    const styles = {
      height: '64px',
      margin: 'auto',
      cursor: 'pointer',
    }

    return (
      <img style={styles} onClick={this.openLink} src={this.props.icon} />
    );
  }
}
