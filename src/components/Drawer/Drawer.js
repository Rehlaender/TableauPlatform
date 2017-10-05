import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Drawer.css';

import Routes from '../../routes.js';

class Drawer extends Component {

  goTo(route) {
    console.log('- well call this object');
  }

  render() {
    return (
      <div id="drawer" className={["flex flex-column"]}>
        <div className={["over-menu"]}></div>
        <div id="action-bar" className={["flex flex-row flex-jc-space-around flex-ai-center"]}>
          <div onClick={ ()=>{this.props.goBack();} } className={["back icon"]}>Go Back</div>
          <div className={["home icon"]}>HOME</div>
          <div className={["burger icon"]}>Burger</div>
        </div>
      </div>
    );
  }
}

export default Drawer;
