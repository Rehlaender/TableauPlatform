import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../routes.js';

class SectionContainer extends Component {

  goTo(route) {
  }

  render() {
    const routes = Routes[0].context[0].context;
    return (
      <div>
        This is a section container
        {
          routes.map((route, i) =>
           <Link to={"/section/" + route.id}
              key={i} className={["column-button "]}>
            {route.title}
           </Link>
          )
        }
      </div>
    );
  }
}

export default SectionContainer;
