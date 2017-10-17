// src/components/App/index.js
import React, { Component } from 'react';
import Routes from '../../routes.js';
import LoginComponent from './LoginComponent.js';

class AdministratorComponent extends Component {

  checkCookie() {
    const cookie = localStorage.getItem('isAdminLoged');
    if(cookie === 'true') {
    } else {
      this.props.history.push("/login");
    }
  }

  componentWillMount() {
    this.checkCookie();
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
