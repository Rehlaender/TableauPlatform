import React, { Component } from 'react';
import logo from './logo.svg';

import './Drawer.css';
import './pallette.css';

class Drawer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const routes = [
      {
        link: 'https://public.tableau.com/views/Top100TableauPublicViews-Q1Q2-2010good/Viewdetail',
        title: 'Viewdetail'
      },
      {
        link: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms',
        title: 'Storms'
      },
      {
        link: 'http://public.tableau.com/views/Top100TableauPublicViews-Q1Q2-2010good/Trends',
        title: 'Trends'
      }
    ];

    return (
      <div className={["Drawer dark-primary-color " + this.props.drawerState]}>
        <div className={["snapper accent-color text-primary-color"]}
              onClick={this.props.changeDrawerState.bind(this)}>
          >
        </div>
        <div className={["column dark-primary-color"]}>
          {
            routes.map((route, i) =>
             <div key={i} className={["column-button "]}
                    onClick={this.props.changeTableauSrc.bind(this, route.link)}>
              {route.title}
             </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Drawer;
