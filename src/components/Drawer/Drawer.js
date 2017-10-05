import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Drawer.css';

import Routes from '../../routes.js';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overMenuBottom: '-100vh',
      overMenuDisplay: 'none'
    };
  }

  toggleOverMenu() {
    if(this.state.overMenuBottom === '-100vh') {
      this.setState({overMenuDisplay: 'flex'});
      setTimeout( ()=> {this.setState({overMenuBottom: '-40px'})}, 100);

    } else {
      this.setState({overMenuBottom: '-100vh'});
      setTimeout( ()=> {this.setState({overMenuDisplay: 'none'})}, 550);
    }
  }

  render() {
    return (
      <div id="drawer" className={["flex flex-column"]}>
        <div style={{top: this.state.overMenuBottom, display: this.state.overMenuDisplay }} className={["over-menu"]}></div>
        <div id="action-bar" className={["flex flex-row flex-jc-space-around flex-ai-center"]}>
          <div onClick={ ()=>{this.props.goBack();} } className={["back icon"]}>Go Back</div>
          <div className={["home icon"]}>HOME</div>
          <div onClick={this.toggleOverMenu.bind(this)} className={["burger icon"]}>Burger</div>
        </div>
      </div>
    );
  }
}

export default Drawer;
