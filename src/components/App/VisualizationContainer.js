// src/components/App/index.js
import React, { Component } from 'react';
import Routes from '../../routes.js';

class VisualizationContainer extends Component {

  componentDidMount() {
    console.log(this.props.match.params.visualization, 'THIS STUFF');
  }

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
