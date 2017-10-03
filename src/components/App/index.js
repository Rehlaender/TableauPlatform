// src/components/App/index.js
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Blob from './Blob.js';
import BlobBrother from './BlobBrother.js';

import './style.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/blob' component={Blob}/>
          <Route path='/blob/:container' component={BlobBrother}/>
        </Switch>
      </div>
    );
  }
}

export default App;
