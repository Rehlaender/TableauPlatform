import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../flexbox.css';
import './VisualizationContainer.css';

import Drawer from '../Drawer/Drawer.js';
import Routes from '../../routes.js';

class VisualizationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualVisualization: 'visualization',
      routesForDrawer: ''
    };
  }

  componentDidMount() {
    //this.initViz();
    // console.log(this.state.actualVisualization.tableauUrl);
  }

  componentWillMount() {
    this.findVisualizationObject();
  }

  initViz() {
    const containerDiv = document.getElementById("containerDiv");

    const options = {
            hideTabs: true,
            hideToolbar: true,
            onFirstInteractive: function () {
              console.log("this is a callback after loading viz.");
              //fireFunction();
            }
          };
    let viz = new window.tableau.Viz(containerDiv, this.state.actualVisualization.tableauUrl, options);
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
    this.setState({ actualVisualization: findVisualization[0], routesForDrawer: findTeam[0].context });
  }

  render() {
    const Visualization = this.state.actualVisualization;

    return (
      <div id="visualization-container" className={["flex flex-column flex-jc-flex-start flex-ai-center"]}>
        <Drawer goBack={this.props.history.goBack} routes={this.state.routesForDrawer}/>
        <div id="containerDiv"></div>
      </div>
    );
  }
}

export default VisualizationContainer;
