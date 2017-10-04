// src/components/App/index.js
import React, { Component } from 'react';
import Routes from '../../routes.js';

class VisualizationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualVisualization: 'visualization'
    };
  }

  componentDidMount() { }

  componentWillMount() {
    this.findVisualizationObject();
  }

  findVisualizationObject() {
    const actualTeam = this.props.match.params.team;
    const actualSection = this.props.match.params.section;
    const actualVisualization = this.props.match.params.visualization;

    const findTeam = Routes.filter((obj) => {
      return obj.id === actualTeam;
    });
    const findSection = findTeam[0].context.filter((obj) => {
      return obj.id === actualSection;
    });
    const findVisualization = findSection[0].context.filter((obj) => {
      return obj.id === actualVisualization;
    });
    this.setState({ actualVisualization: findVisualization[0] });
  }

  render() {
    const Visualization = this.state.actualVisualization;

    return (
      <div>
        This is Visualization { Visualization.title } container
      </div>
    );
  }
}

export default VisualizationContainer;
