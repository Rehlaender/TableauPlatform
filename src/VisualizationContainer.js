import React, { Component } from 'react';

class VisualizationContainer extends Component {
  constructor(props) {
     super(props);
   }

  componentWillMount() {
  }

  componentDidMount() {
    this.initViz();
  }

  initViz() {
    const containerDiv = document.getElementById("containerDiv");
    const options = {
          hideTabs: true,
          hideToolbar: true,
          onFirstInteractive: function () {
            console.log("this is a callback after loading viz.");
          }
        };
    let viz = new window.tableau.Viz(containerDiv, this.props.tableauSrc, options);
    console.log(viz);
  }

  render() {
    return (
      <div className="big-container">
        {this.props.title}
        {this.props.tableauSrc}
        <div id="containerDiv"></div>
      </div>
    );
  }
}

export default VisualizationContainer;
