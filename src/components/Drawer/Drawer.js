import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import './Drawer.css';

import Routes from '../../routes.js';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overMenuBottom: '-100vh',
      overMenuDisplay: 'none',
      routes: '',
      newLocation: ''
    };
  }

  toggleOverMenu() {
    if(this.state.overMenuBottom === '-100vh') {
      this.setState({overMenuDisplay: 'flex'});
      setTimeout( ()=> {this.setState({overMenuBottom: '-40px'})}, 100);

    } else {
      this.setState({overMenuBottom: '-100vh'});
      setTimeout( ()=> {this.setState({overMenuDisplay: 'none'})}, 200);
    }
  }

  prepareNewRoute() {
    let routesArray = this.props.locationForDrawer.split('/').slice(0, -1).join('/');
    this.setState({ newLocation: routesArray });
  }

  goTo(route) {
    console.log(route, " AYA VAMOS COMPA");
  }

  componentWillMount () {
    this.prepareNewRoute();
  }

  componentDidMount () {
    console.log('DRAER ROUTES', this.props.locationForDrawer);
  }

  render() {
    console.log(this.props);
    return (
      <div id="drawer" className={["flex flex-column"]}>
        <div style={{top: this.state.overMenuBottom, display: this.state.overMenuDisplay }}
            className={["over-menu default-primary-color flex flex-column flex-jc-space-around flex-ai-center"]}>
        {
          this.props.routes.map((route, i) => {
            let going = this.state.newLocation + '/' + route.id;
              return (
                <div key={i} className={["menu-link-container divider-color flex flex-column flex-all-center"]}>
                  <div onClick={ this.goTo.bind(this, going) }
                        className={["menu-link text-primary-color"]} replace="true">
                        { route.title }
                  </div>
                </div>
              )
            }

          )
        }
        </div>
        <div id="action-bar" className={["flex flex-row flex-jc-space-around flex-ai-center"]}>
          <div onClick={ ()=>{this.props.goBack();} } className={["back icon flex flex-all-center"]}><Glyphicon glyph="triangle-left"/></div>
          <Link to="/" className={["home icon flex flex-all-center"]}><Glyphicon glyph="home"/></Link>
          <div onClick={this.toggleOverMenu.bind(this)} className={["burger icon flex flex-all-center"]}><Glyphicon glyph="menu-hamburger"/></div>
        </div>
      </div>
    );
  }
}

export default Drawer;
