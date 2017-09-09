import React from 'react';
import 'Styles/footer.less';
import ClickableIcon from 'Components/ClickableIcon.jsx'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  click() {
    console.log("click footer")
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
      // 'zIndex': this.state.show ? '-5' : '-15',
    }

    return (
      <footer className='footer_' style={styles} onClick={this.click}>
        hello
        {/* <div>
        <ClickableIcon url='https://github.com/jayychang' icon={require('Assets/icons/github-icon.png')} />
        <p>hello hello hello hello hello hello hello hello hello hello hello </p>
        </div> */}
      </footer>
    );
  }
}
