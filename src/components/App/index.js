import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import * as firebase from 'firebase';

import MainContainer from './MainContainer.js';
import TeamContainer from './TeamContainer.js';
import VisualizationContainer from './VisualizationContainer.js';
import AdministratorComponent from '../Administrator/AdministratorComponent.js';
import LoginComponent from '../Administrator/LoginComponent.js';
import TeamCRUD from '../CRUD/Team/TeamCRUD.js';
import Blob from './Blob.js';

import '../../pallette.css';
import './style.css';
import '../../flexbox.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      firstLoad: false,
      teams: [],
      sections: [],
      visualizations: []
    };
  }

  findAllObjects() {
    this.retrieveVisualizationsFromDatabase();
  }

  retrieveSectionsFromDatabase() {
    const rootRef = firebase.database().ref().child('sections');
    rootRef.on('child_added', snapshot => {
      let section = snapshot.val();
      this.setState({ sections: [section].concat(this.state.sections) });
    })
  }

  retrieveVisualizationsFromDatabase() {
    const rootRef = firebase.database().ref().child('visualizations');
    rootRef.on('child_added', snapshot => {
      let visualization = snapshot.val();
      this.setState({ visualizations: [visualization].concat(this.state.visualizations) });
    })
  }

  retrieveTeamsFromDatabase() {
    const rootRef = firebase.database().ref().child('teams');
    rootRef.on('child_added', snapshot => {
      let team = snapshot.val();
      this.setState({ teams: [team].concat(this.state.teams) });
    })
  }

  createFirstLoad() {
    localStorage.setItem('firstLoad', 'true');
  }

  componentWillMount() {
    this.createFirstLoad();
  }

  componentDidMount() {
    const firstLoad = localStorage.getItem('firstLoad');
    if(firstLoad === 'true') {
      localStorage.removeItem('isAdminLoged');
    }
  }

  render() {
    return (
      <div className="App flex flex-column flex-all-center">
        <div className="content flex flex-column">
          <Switch>
            <Route exact path='/' component={MainContainer}/>
            <Route path='/team/:team' component={TeamContainer}/>
            <Route path='/visualization/:team/:section/:visualization' component={VisualizationContainer}/>
            <Route path='/admin' component={AdministratorComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/teams' component={TeamCRUD} />
            <Route path='*' component={Blob}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
