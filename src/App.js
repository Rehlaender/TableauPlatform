import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VisualizationContainer from './VisualizationContainer.js';
import Drawer from './Drawer.js';

import './App.css';
import './pallette.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableauSrc: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms',
      drawerState: 'shown'
    };

    this.showContainer = this.showContainer.bind(this);
   }

  showContainer() {
  }

  changeTableauSrc(route) {
    this.unmount();
    this.setState({ tableauSrc: route });
    console.log(route);
    this.changeDrawerState();
  }

  changeDrawerState() {
    const handler = this.state.drawerState;
    console.log(handler, 'handler state')
    if(handler === 'shown') {
      this.setState({drawerState: 'hidden'});
    } else if (handler === 'hidden') {
      this.setState({drawerState: 'shown'});
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('component will update', nextProps, nextState.tableauSrc);
    this.mount();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update', prevProps, prevState.tableauSrc);
  }

  componentDidMount() {
    this.mount();
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
      <div className={["App"]}>
        <Drawer
          drawerState={this.state.drawerState}
          changeDrawerState={this.changeDrawerState.bind(this)}
          changeTableauSrc={this.changeTableauSrc.bind(this)} />
        <div id="reduxContainer"></div>
        <div id="warning"> Please use this app in landscape </div>
      </div>

    );
  }
}

export default App;
