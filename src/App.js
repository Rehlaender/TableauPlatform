import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

import VisualizationContainer from './VisualizationContainer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableauSrc: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms' ,
      title: 'lel',
      willShowContainer: false
    };

    this.changeTableauSrc = this.changeTableauSrc.bind(this);
    this.showContainer = this.showContainer.bind(this);
    this.chooseOne = this.chooseOne.bind(this);
    this.chooseTwo = this.chooseTwo.bind(this);
   }

  showContainer() {

  }
  changeTableauSrc() {
  }

  chooseOne() {
    this.setState({ tableauSrc: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms' });
    console.log(this.state.tableauSrc);
  }

  chooseTwo() {
    this.setState({ tableauSrc: 'http://public.tableau.com/views/Top100TableauPublicViews-Q1Q2-2010good/Trends'});
    console.log(this.state.tableauSrc);
  }

  componentWillMount() {
  }

  mount() {
    ReactDOM.render(
      <VisualizationContainer
        tableauSrc={this.state.tableauSrc}
        title="lel"/>,
      document.getElementById('here'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('here'));
    this.setState({ tableauSrc: 'http://public.tableau.com/views/Top100TableauPublicViews-Q1Q2-2010good/Trends'});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.mount.bind(this)}>mount</button>
        <button onClick={this.unmount.bind(this)}>unmount</button>
        <div id="here"></div>
      </div>
    );
  }
}

export default App;
