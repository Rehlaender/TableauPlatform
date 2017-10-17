// src/components/App/index.js
import React, { Component } from 'react';
import Routes from '../../routes.js';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: 'primary',
      username: '',
      password: ''
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.loginStatus === "success") {
      this.Login();
    }
  }

  Login() {
    alert("Login successful");
    setTimeout( ()=> { this.props.history.push("/admin"); }, 0);
  }

  LoginState(validation) {
    this.setState({loginStatus: validation});
  }

  LoginDummyValidation() {
    const validation = 'warning';
    const dummyUsername = "Administrator";
    const dummyPassword = "Neoris.1";

    const  inputUsername = this.state.username;
    const  inputPassword = this.state.password;
    if(dummyUsername === inputUsername && dummyPassword === inputPassword) {
      this.LoginState('success');
      this.setState({ helpMessage: "Success!"})
    } else {
      this.LoginState('warning');
      this.setState({ helpMessage: "Wrong account and password!"})
    }
  }

  getValidationState() {
    if (this.state.loginStatus === 'success') return 'success';
    else if (this.state.loginStatus === 'warning') return 'warning';
    else if (this.state.loginStatus === 'error') return 'error';
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  preventSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Col xs={12} md={8}>
      <div>
        <h3>Login.</h3>
        <form>
          <FormGroup
            validationState={this.getValidationState()}
          >
            <ControlLabel>Please enter username and password</ControlLabel>
            <FormControl
              id="username"
              type="text"
              value={this.state.username}
              placeholder="Enter text"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              id="password"
              type="text"
              value={this.state.password}
              placeholder="Enter password"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>{ this.state.helpMessage }</HelpBlock>
            <Button
              type="button"
              onClick={ this.LoginDummyValidation.bind(this) }
              bsStyle={this.state.loginStatus}
            >
              Login
            </Button>
          </FormGroup>
        </form>
      </div>
      </Col>
    );
  }
}

export default LoginComponent;
