import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount() {
    alert('will mount');

  }

  componentDidMount() {
    alert('did mount');



  }

  // initViz() {
  //   var containerDiv = document.getElementById("vizContainer"),
  //       url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
  //       options = {
  //         hideTabs: true,
  //         onFirstInteractive: function () {
  //           console.log("Run this code when the viz has finished loading.");
  //         }
  //       };
  //       // Create a viz object and embed it in the container div.
  //       var viz = new tableau.Viz(containerDiv, url, options);
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="containerDiv"></div>
      </div>
    );
  }
}

export default App;
