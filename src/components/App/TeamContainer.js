import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../flexbox.css';
import './TeamContainer.css';

import Drawer from '../Drawer/Drawer.js';
import Routes from '../../routes.js';

class TeamContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualTeam: 'notmanufactura',
      routesForDrawer: ''
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
      return obj.id === actualTeam;
    });
    this.setState({ actualTeam: result[0], routesForDrawer: Routes});
  }

  render() {
    const Team = this.state.actualTeam;

    return (
      <div className={["team-container flex flex-column flex-jc-flex-start flex-ai-center"]}>
        <Drawer goBack={this.props.history.goBack} routes={this.state.routesForDrawer} actualRouteParams={this.props.match.params} />
        <div className={["team-title flex flex-row flex-all-center default-primary-color text-primary-color "]}>
          <h2>
            { Team.title }
          </h2>
        </div>
        <div className={["team-content-container flex flex-row flex-all-center"]}>
          <div className={["team-content flex flex-row flex-wrap flex-jc-space-around"]}>
          {
            // Sections containers
            Team.context.map((Section, i) =>
              <div key={i}
                className={["section-container flex flex-column"]}>
                <h3 className={["section-title divider-color default-primary-color  text-primary-color"]}>
                  {Section.title}
                </h3>
                <div className={["section-content flex flex-row flex-jc-space-evenly flex-wrap"]}>
                {
                  // Visualizations
                  Section.context.map((Visualization, j) =>
                    <Link key={j}
                          to={'/visualization/' + Team.id +
                              '/' + Section.id + '/' + Visualization.id  }
                          className={["visualization-container flex flex-column flex-all-center"]} >
                      <div className={["visualization-icon flex flex-all-center secondary-text-color"]}>
                       /
                      </div>
                      <div className={["visualization-title secondary-text-color "]}>
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
      </div>
    );
  }
}

export default TeamContainer;
