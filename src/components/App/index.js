import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContainer from './MainContainer.js';
import TeamContainer from './TeamContainer.js';
import SectionContainer from './SectionContainer.js';
import VisualizationContainer from './VisualizationContainer.js';

import Blob from './Blob.js';

import './style.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={MainContainer}/>
          <Route path='/team/:team' component={TeamContainer}/>
          <Route path='/section/:team/:section' component={SectionContainer}/>
          <Route path='/visualization/:team/:section/:visualization' component={VisualizationContainer}/>
          <Route path='*' component={Blob}/>
        </Switch>
      </div>
    );
  }
}

export default App;
