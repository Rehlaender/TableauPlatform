import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../../flexbox.css';
import './VisualizationContainer.css';

import Visualization from './Visualization.js';
import Drawer from '../Drawer/Drawer.js';
import Routes from '../../routes.js';

class VisualizationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualVisualization: 'visualization',
      routesForDrawer: '',
      locationForDrawer: ''
    };
  }

  changeLoadingState() {
    console.log("changing!!!!!!!!!!");
    this.unmount();
    this.findVisualizationObject();
    this.setState({ locationForDrawer: this.props.location.pathname });
    setTimeout( ()=> {this.mount();}, 500);
  }

  componentDidMount() {
    //console.log("ME MONTE");
    this.mount();
  }

  componentDidUpdate (prevProps, prevState){
    // console.log("YA CAMBIE, PERRO");
    // this.unmount();
    // setTimeout( ()=> {this.mount();}, 500);
  }

  componentWillMount() {
    console.log("ME MONTARE");
    this.findVisualizationObject();
    this.setState({ locationForDrawer: this.props.location.pathname });
  }

  mount() {
    ReactDOM.render(
      <Visualization
        tableauSrc={this.state.actualVisualization.tableauUrl}
        changeLoadingState={this.changeLoadingState.bind(this)}
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

  // initViz() {
  //   const containerDiv = document.getElementById("containerDiv");
  //
  //   const options = {
  //           hideTabs: true,
  //           hideToolbar: true,
  //           onFirstInteractive: function () {
  //             console.log("this is a callback after loading viz.");
  //             //fireFunction();
  //           }
  //         };
  //   let viz = new window.tableau.Viz(containerDiv, this.state.actualVisualization.tableauUrl, options);
  // }

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
    console.log("ME RENDER");
    const Visualization = this.state.actualVisualization;

    return (
      <div id="visualization-container" className={["flex flex-column flex-jc-flex-start flex-ai-center"]}>
        <Drawer goBack={this.props.history.goBack}
                routes={this.state.routesForDrawer}
                actualRouteParams={this.props.match.params}
                locationForDrawer={this.state.locationForDrawer}
                history={this.props.history.push}
                changeLoadingState={this.changeLoadingState.bind(this)} />
        <div id="reduxContainer"></div>
      </div>
    );
  }
}

export default VisualizationContainer;
