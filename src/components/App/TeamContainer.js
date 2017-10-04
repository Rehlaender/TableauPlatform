// src/components/App/index.js
import React, { Component } from 'react';
import Routes from '../../routes.js';

class TeamContainer extends Component {

  goTo(route) {
    console.log(route, '- well call this object');
  }

  componentDidMount() {
    console.log('--- THIS PROPS', this.props.match.params);
  }

  render() {
    const routes = Routes[0].context;
    console.log(routes);

    return (
      <div>
        This is a team container
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

export default TeamContainer;
