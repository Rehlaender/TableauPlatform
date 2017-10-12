import React, { Component } from 'react';

import './LoadingView.css';

class LoadingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
  }

  render() {
    return (
      <div id="LoadingView"
        className={["default-primary-color text-primary-color loading-view flex-all-center"]}
        style={{display: (this.props.loading ? 'flex' : 'none')}}>
        <h2 className={["loadingText"]}>Loading</h2>
      </div>
    );
  }
}

export default LoadingView;
