// src/components/App/index.js
import React, { Component } from 'react';
import Routes from '../../routes.js';

class Blob extends Component {

  render() {
    const routes = Routes;
    console.log(routes);

    return (
      <div>
        HI IM BLOB
      </div>
    );
  }
}

export default Blob;
