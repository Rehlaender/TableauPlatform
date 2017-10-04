// src/components/App/index.js
import React, { Component } from 'react';
import Routes from '../../routes.js';

class VisualizationContainer extends Component {

  render() {
    const routes = Routes;
    console.log(routes);

    return (
      <div>
        This is a Visualization container
      </div>
    );
  }
}

export default VisualizationContainer;
