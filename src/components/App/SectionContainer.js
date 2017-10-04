// src/components/App/index.js
import React, { Component } from 'react';
import Routes from '../../routes.js';

class SectionContainer extends Component {

  goTo(route) {
    console.log(route, '- well call this object');
  }

  render() {
    const routes = Routes[0].context[0];
    console.log(routes);

    return (
      <div>
        This is a section container
      </div>
    );
  }
}

export default SectionContainer;
