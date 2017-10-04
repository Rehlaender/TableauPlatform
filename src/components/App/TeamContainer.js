import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          // Sections containers
          routes.map((route, i) =>
            <div
              key={i} className={["column-button "]}
                  onClick={this.goTo.bind(this, route.id)}>
              <strong>{route.title}</strong>
              {
                // Visualizations

                route.context.map((vRoute, j) =>
                  <Link to={'/visualization/' + this.props.match.params.team +
                            '/' + route.id + '/' + vRoute.id  } key={j}>{vRoute.title}</Link>
                )
              }
           </div>
          )
        }
      </div>
    );
  }
}

export default TeamContainer;
