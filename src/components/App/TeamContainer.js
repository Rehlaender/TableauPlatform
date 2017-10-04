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
      <div className={["team-container"]}>
        <div className={["title"]}>
          This is team { Team.title } container
        </div>
        {
          // Sections containers
          Team.context.map((Section, i) =>
            <div key={i} className={["section-container"]}>
              <div className={["section-title"]}>{Section.title}</div>
              {
                // Visualizations
                Section.context.map((Visualization, j) =>
                  <Link key={j}
                        to={'/visualization/' + Team.id +
                            '/' + Section.id + '/' + Visualization.id  }
                        className={["visualization-container"]}    >
                    <div>
                      {Visualization.title}
                    </div>
                  </Link>
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
