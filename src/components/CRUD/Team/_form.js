import React, { Component } from 'react';

class _form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitStatus: '',
      helpMessage: '',
      id: '',
      title: ''
    };
  }

  componentWillMount() {
  }

  componentWillUpdate(nextProps, nextState) {
  }

  getValidationState() {
    if (this.state.submitStatus === 'success') return 'success';
    else if (this.state.submitStatus === 'warning') return 'warning';
    else if (this.state.submitStatus === 'error') return 'error';
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Team form.</h3>
        <form>
          <FormGroup
            validationState={this.getValidationState()}
          >
            <ControlLabel>Please enter Team Information</ControlLabel>
            <FormControl
              id="id"
              type="text"
              value={this.state.id}
              placeholder="Enter team id"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              id="title"
              type="text"
              value={this.state.title}
              placeholder="Enter team title"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>{ this.state.helpMessage }</HelpBlock>
            <Button
              type="button"
              onClick={ this.LoginDummyValidation.bind(this) }
              bsStyle={this.state.loginStatus}
            >
              Go
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default _form;
