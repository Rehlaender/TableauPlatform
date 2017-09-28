import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = { tableauSrc: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms' };
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
            console.log("Run this code when the viz has finished loading.");
          }
        };
    let viz = new window.tableau.Viz(containerDiv, this.state.tableauSrc, options);
    console.log(viz);
  }

  consolero() {
    alert("lel");
    console.log('Lel');
  }

  render() {
    return (
      <div className="App">
        {this.state.tableauSrc}
        <button onClick={this.consolero.bind(this)}>Click</button>
        <div id="containerDiv"></div>
      </div>
    );
  }
}

export default App;
