import React from 'react';

export default class Content extends React.Component {
  render() {
    const styles = {
      'backgroundColor': 'grey',
      'height': '1000px',
      'marginBottom': '200px',
    }

    return (
      <div style={styles} />
    );
  }
}
