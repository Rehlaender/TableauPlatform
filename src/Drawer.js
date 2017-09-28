import React, { Component } from 'react';
import logo from './logo.svg';
import './Drawer.css';

class Drawer extends Component {
  //routes
  // https://public.tableau.com/views/Top100TableauPublicViews-Q1Q2-2010good/Viewdetail
  // http://public.tableau.com/views/RegionalSampleWorkbook/Storms'
  // http://public.tableau.com/views/Top100TableauPublicViews-Q1Q2-2010good/Trends

  constructor(props) {
    super(props);
   }

  render() {
    return (
      <div className="Drawer">
        Im a drawer, lol
      </div>
    );
  }
}

export default Drawer;
