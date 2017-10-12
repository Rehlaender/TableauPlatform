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
      <div style={{height:'100%', textAlign:'center'}}
            className={["default-primary-color text-primary-color  main-container flex flex-column flex-all-center"]}>
        <div className={["main-title"]}>
          <h1>
            Neoris
          </h1>
        </div>
        <br />
        <div className={["main-content flex flex-column"]}>
          <h3 className={["text-primary-color"]}>Equipos:</h3>
          <br />
          {
            routes.map((route, i) =>
             <Link to={"/team/" + route.id}
                key={i} className={["column-button primary-text-color "]}>
              - {route.title}
             </Link>
            )
          }
        </div>
      </div>
    );
  }
}

export default MainContainer;
