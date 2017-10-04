import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../routes.js';

class MainContainer extends Component {

  goTo(route) {
    console.log(route, '- well call this object');
  }

  render() {
    const routes = Routes;
    console.log(routes);

    return (
      <div>
        This is a main container
        {
          routes.map((route, i) =>
           <Link to={"/main/" + route.id}
              key={i} className={["column-button "]}>
            {route.title}
           </Link>
          )
        }
      </div>
    );
  }
}

export default MainContainer;
