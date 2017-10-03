import React, { Component } from 'react';
import logo from './logo.svg';

import './MobileDrawer.css';
import './pallette.css';

class MobileDrawer extends Component {

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
      <div className={["MobileDrawer"]}>
        <div className={["CornerButton Burger"]}
              onClick={this.props.changeDrawerState.bind(this)}>
         <div className="burger-item"></div>
         <div className="burger-item"></div>
         <div className="burger-item"></div>
        </div>
        <div className={["MobileContainer dark-primary-color " + this.props.drawerState]}>
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

export default MobileDrawer;
