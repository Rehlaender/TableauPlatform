import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

import _view from './_view.js';

class TeamCRUD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsJSON: []
    };
  }

  checkIfTeamExists() {
    const team = JSON.stringify(localStorage.getItem('team'));
    console.log(team, 'super stringy');
    if(team === 'null') {
      const data = JSON.stringify([]);
      localStorage.setItem('team', data);
    } else {
      this.state.teamsJSON.push(team);
    }
  }

  componentWillMount() {
    this.checkIfTeamExists();
  }

  createDummyTeam() {
    const randomName = Math.random().toString(36).substr(2, 5);
    const randomTeam = { id: randomName, title: randomName};
    let data = [];
    data = JSON.parse(localStorage.getItem('team'));
    data.push(randomTeam);
    localStorage.setItem('team', JSON.stringify(data));
  }

  componentWillUpdate(nextProps, nextState) {
  }

  render() {
    return (
      <div>
        TEAM
        <Link to="/admin"> Admin </Link>
        <Button onClick={this.createDummyTeam.bind(this)}>Create dummy team</Button>
        <_view teams={this.state.teamsJSON}/>
      </div>
    );
  }
}

export default TeamCRUD;
