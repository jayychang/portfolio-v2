import React from 'react';

export default class ContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.openLink = this.openLink.bind(this);
  }

  openLink() {
    const link = this.props.url;
    window.open(link);
  }

  render() {
    const container = {
      minWidth: this.props.size,
      backgroundColor: 'white',
      cursor: 'pointer',
    }

    return (
      <div style={container} className="content-item" onClick={this.openLink}>
        <img src={this.props.image} style={{height: '100%'}} />
        <div className="content-item-logo" style={{minHeight: '100px'}}>
          <img src={this.props.logo} style={{position: 'absolute', width: '80%', margin: 'auto 10%', top: '0', bottom: '0'}} />
        </div>
      </div>
    );
  }
}
