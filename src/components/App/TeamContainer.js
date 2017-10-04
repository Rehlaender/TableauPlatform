import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../routes.js';

class TeamContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualTeam: 'notmanufactura'
    };
  }

  goTo(route) {
    console.log(route, '- well call this object');
  }

  componentDidMount() {
  }

  componentWillMount() {
    this.findTeamObject();
  }

  findTeamObject() {
    const actualTeam = this.props.match.params.team;
    const result = Routes.filter((obj) => {
      return obj.id = actualTeam;
    });
    this.setState({ actualTeam: result[0] });
  }

  render() {
    const Team = this.state.actualTeam;

    return (
      <div>
        This is team { Team.title } container
        {
          // Sections containers
          Team.context.map((Section, i) =>
            <div
              key={i} className={["column-button "]}>
              <strong>{Section.title}</strong>
              {
                // Visualizations
                Section.context.map((Visualization, j) =>
                  <Link to={'/visualization/' + Team.id +
                            '/' + Section.id + '/' + Visualization.id  } key={j}>{Visualization.title}</Link>
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
