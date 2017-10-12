import React, { Component } from 'react';

import './VisualizationContainer.css';
import './Visualization.css';


class Visualization extends Component {
  constructor(props) {
     super(props);
  }

  componentDidMount() {
    this.initViz();
  }


  initViz() {
    const ContainerDiv = document.getElementById("ContainerDiv");
    var fireFunction = this.props.toggleLoadingView.bind(this);

    const options = {
          hideTabs: true,
          hideToolbar: true,
          onFirstInteractive: function () {
            console.log("this is a callback after loading viz.");
            fireFunction();
          }
        };
    let viz = new window.tableau.Viz(ContainerDiv, this.props.tableauSrc, options);
  }

  render() {
    return (
      <div id="visualization-container">
        <div id="ContainerDiv"></div>
      </div>
    );
  }
}

export default Visualization;
