// src/components/App/index.js
import React, { Component } from 'react';
import Routes from '../../routes.js';

class Blob extends Component {

  render() {
    const routes = Routes;
    console.log(routes);

    return (
      <div>
        How did you get here?
      </div>
    );
  }
}

export default Blob;
