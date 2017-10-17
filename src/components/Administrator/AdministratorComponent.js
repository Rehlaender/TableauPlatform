// src/components/App/index.js
import React, { Component } from 'react';
import Routes from '../../routes.js';
import LoginComponent from './LoginComponent.js';

class AdministratorComponent extends Component {



  checkCookie() {
    const adminCookie = false;
    if(this.adminCookie === true) {
      console.log("admin is loged");
    } else {
      console.log("admin isnt loged");
      this.props.history.push("/login");
    }
  }

  componentWillMount() {
    this.checkCookie();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        Welcome AdministratorComponent
      </div>
    );
  }
}

export default AdministratorComponent;
