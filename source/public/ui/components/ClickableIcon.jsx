import React from 'react';

export default class ClickableIcon extends React.Component {
  constructor(props) {
    super(props);
    this.openNew = this.openNew.bind(this);
  }

  openNew() {
    window.open(this.props.url);
    console.log("clicked");
  };

  render() {
    const styles = {
      'height': '64px',
      'margin': '38px auto',
    }

    return (
      <div>
        <img style={styles} onClick={this.openNew} src={this.props.icon} />
      </div>
    );
  }
}
