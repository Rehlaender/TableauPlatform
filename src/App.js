import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VisualizationContainer from './VisualizationContainer.js';
import Drawer from './Drawer.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableauSrc: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms',
    };

    this.showContainer = this.showContainer.bind(this);
   }

  showContainer() {
  }

  changeTableauSrc(route) {
    this.setState({ tableauSrc: route });
    console.log(route);
  }

  componentDidMount() {
  }

  mount() {
    ReactDOM.render(
      <VisualizationContainer tableauSrc={this.state.tableauSrc} />,
      document.getElementById('reduxContainer'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('reduxContainer'));
  }

  render() {
    return (
      <div className="App">
        <Drawer changeTableauSrc={this.changeTableauSrc.bind(this)} />
        <button onClick={this.mount.bind(this)}>mount</button>
        <button onClick={this.unmount.bind(this)}>unmount</button>
        <div id="reduxContainer"></div>
      </div>
    );
  }
}

export default App;
