import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../../flexbox.css';
import './VisualizationContainer.css';

import LoadingView from './LoadingView.js';
import Visualization from './Visualization.js';
import Drawer from '../Drawer/Drawer.js';
import Routes from '../../routes.js';

class VisualizationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualVisualization: 'visualization',
      routesForDrawer: '',
      locationForDrawer: '',
      loading: true
    };
  }

  toggleLoadingView() {
    this.setState({ loading: !this.state.loading });
    console.log('this.loading.state: ', this.state.loading);
  }

  changeLoadingState() {
    this.toggleLoadingView();
    this.unmount();
    setTimeout( ()=> {this.findVisualizationObject();}, 100);
    setTimeout( ()=> {this.mount();}, 100);
  }

  componentDidMount() {
    this.mount();
  }

  componentWillUpdate (prevProps, prevState){
  }

  componentWillMount() {
    this.findVisualizationObject();
    this.setState({ locationForDrawer: this.props.location.pathname });
  }

  mount() {
    ReactDOM.render(
      <Visualization
        toggleLoadingView={this.toggleLoadingView.bind(this)}
        tableauSrc={this.state.actualVisualization.tableauUrl}
         />,
      document.getElementById('reduxContainer'));
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('reduxContainer'));
  }

  redoViz() {
    const containerDiv = document.getElementById("containerDiv");
    let viz = new window.HTMLDivElement(containerDiv);
  }

  findVisualizationObject() {
    const actualTeam = this.props.match.params.team;
    const actualSection = this.props.match.params.section;
    const actualVisualization = this.props.match.params.visualization;

    const findTeam = Routes.filter((obj) => {
      return obj.id === actualTeam;
    });
    const findSection = findTeam[0].context.filter((obj) => {
      return obj.id === actualSection;
    });
    const findVisualization = findSection[0].context.filter((obj) => {
      return obj.id === actualVisualization;
    });
    this.setState({ actualVisualization: findVisualization[0], routesForDrawer: findSection[0].context });
  }

  render() {
    const Visualization = this.state.actualVisualization;

    return (
      <div id="visualization-container" className={["flex flex-column flex-jc-flex-start flex-ai-center"]}>
        <LoadingView loading={this.state.loading}/>
        <Drawer goBack={this.props.history.goBack}
                routes={this.state.routesForDrawer}
                actualRouteParams={this.props.match.params}
                locationForDrawer={this.state.locationForDrawer}
                history={this.props.history.push}
                changeLoadingState={this.changeLoadingState.bind(this)}/>
        <div id="reduxContainer"></div>
      </div>
    );
  }
}

export default VisualizationContainer;
