// src/components/App/index.js
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContainer from './MainContainer.js';
import TeamContainer from './TeamContainer.js';
import SectionContainer from './SectionContainer.js';
import VisualizationContainer from './VisualizationContainer.js';


import './style.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/main' component={MainContainer}/>
          <Route path='/main/:team' component={TeamContainer}/>
          <Route path='/main/:team/:section' component={SectionContainer}/>
          <Route path='/main/:team/:section/:visualization' component={VisualizationContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
