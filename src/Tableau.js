import React, { Component } from 'react';
import './App.css';

class Tableau extends Component {

  constructor(props) {
     super(props);
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
            console.log("Run this code when the viz has finished loading.");
          }
        };
    let viz = new window.tableau.Viz(containerDiv, this.props.tableauSrc, options);
    console.log(viz);
  }

  render() {
    return (
      <div id="containerDiv"></div>
    );
  }
}

export default Tableau;
