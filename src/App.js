import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VisualizationContainer from './VisualizationContainer.js';
import Drawer from './Drawer.js';
import MobileDrawer from './MobileDrawer.js';


import './App.css';
import './pallette.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableauSrc: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms',
      drawerState: 'hidden',
      loadingContainerState: 'loaded'
    };

    this.showContainer = this.showContainer.bind(this);
   }

  showContainer() {
  }

  changeTableauSrc(route) {
    this.unmount();
    this.setState({ tableauSrc: route });
    this.changeDrawerState();
    // HACK: HERE ADD THE LOADING SCREEN
    this.handleChangeTableTimeout();
  }

  handleChangeTableTimeout() {
    this.changeLoadingState();
    setTimeout( ()=> {this.mount();}, 1000);
  }

  changeDrawerState() {
    const handler = this.state.drawerState;
    if(handler === 'shown') {
      this.setState({drawerState: 'hidden'});
    } else if (handler === 'hidden') {
      this.setState({drawerState: 'shown'});
    }
  }

  changeLoadingState() {
    const handler = this.state.loadingContainerState;
    if(handler === 'loading') {
      this.setState({loadingContainerState: 'loaded'});
    } else if (handler === 'loaded') {
      this.setState({loadingContainerState: 'loading'});
    }
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentDidMount() {
    // this.mount();
  }

  mount() {
    ReactDOM.render(
      <VisualizationContainer
        tableauSrc={this.state.tableauSrc}
        changeLoadingState={this.changeLoadingState.bind(this)} />,
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
        <MobileDrawer
          drawerState={this.state.drawerState}
          changeDrawerState={this.changeDrawerState.bind(this)}
          changeTableauSrc={this.changeTableauSrc.bind(this)} />
        <div className={["loading-container default-primary-color text-primary-color "
                          + this.state.loadingContainerState]}>
          <div className={["loading-text"]}>loading</div>
        </div>
        <div id="reduxContainer"></div>
        <div id="warning"> Please use this app in landscape </div>
      </div>

    );
  }
}

export default App;
