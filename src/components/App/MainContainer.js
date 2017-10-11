import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../flexbox.css';

import Routes from '../../routes.js';

class MainContainer extends Component {

  goTo(route) {
    console.log(route, '- well call this object');
  }

  render() {
    const routes = Routes;
    console.log(routes);

    return (
      <div style={{height:'100%', textAlign:'center'}} className={["main-container flex flex-column flex-all-center"]}>
        <div className={["main-title"]}>
          <h1>
            Neoris
          </h1>
        </div>
        <div className={["main-content flex flex-column"]}>
        {
          routes.map((route, i) =>
           <Link to={"/team/" + route.id}
              key={i} className={["column-button "]}>
            {route.title}
           </Link>
          )
        }
        </div>
      </div>
    );
  }
}

export default MainContainer;
