// src/components/App/index.js
import React, { Component } from 'react';

class BlobBrother extends Component {

  componentDidMount() {
    console.log(this.props.match.params.container, 'this props, lel');
  }

  render() {
    return (
      <div>
        HI IM BLOB BROTHER
      </div>
    );
  }
}

export default BlobBrother;
