import React from 'react';

export default class ProjectItem extends React.Component {
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
    }

    const title = {
      fontSize: '25px',
      margin: '0 10px 10px 10px',
      textAlign: 'center',
    }

    const description = {
      fontSize: '20px',
      margin: '8px',
      textAlign: 'center',
    }

    return (
      <div style={container} className="project-item" onClick={this.openLink}>
        <img src={this.props.image} style={{height: '100%'}} />
        <div className="project-item-hover" style={{minHeight: '100px'}}>
          <p style={title}>{this.props.title}</p>
          <p style={description}>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
