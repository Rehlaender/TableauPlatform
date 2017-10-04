// src/components/App/index.js
import React, { Component } from 'react';
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
           <div key={i} className={["column-button "]}
                  onClick={this.goTo.bind(this, route.id)}>
            {route.title}
           </div>
          )
        }
      </div>
    );
  }
}

export default MainContainer;
