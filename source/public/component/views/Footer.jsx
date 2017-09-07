import React from 'react';
import '../../style/footer.less'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  render() {
    window.addEventListener('scroll', (event) => {
      let distance = event.srcElement.body.scrollTop;
      if (distance > 400 && this.state.show === false) {
        this.setState({
          show: true,
        });
      } else if (distance < 400 && this.state.show === true){
        this.setState({
          show: false,
        });
      }
    });

    const styles = {
      'zIndex': this.state.show ? '-10' : '-30',
    }

    return (
      <div className='footer' style={styles}>
        <p>hello hello hello hello hello hello hello hello hello hello hello </p>
        <p>hello hello hello hello hello hello hello hello hello hello hello </p>
      </div>
    );
  }
}
