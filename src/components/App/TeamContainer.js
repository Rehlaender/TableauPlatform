import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../flexbox.css';
import './TeamContainer.css';

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
      <div className={["team-container flex flex-column flex-jc-flex-start flex-ai-center"]}>
        <div className={["team-title flex flex-row flex-all-center"]}>
          <h2>
            This is team { Team.title } container
          </h2>
        </div>
        <div className={["team-content flex flex-row flex-wrap flex-jc-space-around"]}>
        {
          // Sections containers
          Team.context.map((Section, i) =>
            <div key={i}
              className={["section-container flex flex-column"]}>
              <h3 className={["section-title"]}>
                {Section.title}
              </h3>
              <div className={["section-content flex flex-row flex-jc-space-between flex-wrap"]}>
              {
                // Visualizations
                Section.context.map((Visualization, j) =>
                  <Link key={j}
                        to={'/visualization/' + Team.id +
                            '/' + Section.id + '/' + Visualization.id  }
                        className={["visualization-container flex flex-column flex-all-center"]} >
                    <div className={["visualization-icon flex flex-all-center"]}>
                     /
                    </div>
                    <div className={["visualization-title"]}>
                      {Visualization.title}
                    </div>
                  </Link>
                )
              }
              </div>
           </div>
          )
        }
        </div>
      </div>
    );
  }
}

export default TeamContainer;
