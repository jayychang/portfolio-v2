import React from 'react';

export default class ClickableIcon extends React.Component {
  constructor(props) {
    super(props);
    this.openNew = this.openNew.bind(this);
  }

  openNew() {
    const link = this.props.url;
    if (/^mailto:/.test(link)) {
      window.location = link;
    } else {
      window.open(link);
    }
  }

  render() {
    const styles = {
      'height': '64px',
      'margin': 'auto',
      'cursor': 'pointer',
    }

    return (
      <div>
        <img style={styles} onClick={this.openNew} src={this.props.icon} />
      </div>
    );
  }
}
