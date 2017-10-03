import React, { Component } from 'react';

import './VisualizationContainer.css';

class VisualizationContainer extends Component {
  constructor(props) {
     super(props);
  }

  componentDidMount() {
    this.initViz();
  }


  initViz() {
    const containerDiv = document.getElementById("containerDiv");
    var fireFunction = this.props.changeLoadingState.bind(this);

    const options = {
          hideTabs: true,
          hideToolbar: true,
          onFirstInteractive: function () {
            console.log("this is a callback after loading viz.");
            fireFunction();
          }
        };
    let viz = new window.tableau.Viz(containerDiv, this.props.tableauSrc, options);
    console.log(viz);
  }

  render() {
    return (
      <div className="visualization-container">
        <div id="containerDiv"></div>
      </div>
    );
  }
}

export default VisualizationContainer;
