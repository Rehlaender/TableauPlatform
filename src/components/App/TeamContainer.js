import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import * as firebase from 'firebase';

import '../../flexbox.css';
import './TeamContainer.css';

import Drawer from '../Drawer/Drawer.js';
import Routes from '../../routes.js';

class TeamContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualTeam: 'notmanufactura',
      routesForDrawer: [],
      locationForDrawer: '',
      sections: [],
      visualizations: []
    };
  }

  componentDidMount() {
  }

  retrieveVisualizationsFromSection(sectionId) {
    let sectionContext = [];
    this.state.visualizations.map((visualization, i) => {
      if(visualization.section === sectionId) {
        sectionContext.push(visualization);
      }
    })
    return sectionContext;
  }

  retrieveVisualizationsFromDatabase() {
    const rootRef = firebase.database().ref().child('visualizations');
    rootRef.on('child_added', snapshot => {
      let visualization = snapshot.val();
      this.setState({ visualizations: [visualization].concat(this.state.visualizations) });
    })
  }

  retrieveSectionsFromDatabase() {
    const actualTeam = this.props.match.params.team;
    const rootRef = firebase.database().ref().child('sections');
    rootRef.on('child_added', snapshot => {
      let section = snapshot.val();
      if(section.team === actualTeam) {
        this.setState({ sections: [section].concat(this.state.sections) });
      }
    })
    this.setState({ actualTeam: actualTeam });
  }

  retrieveTeamsForDrawer() {
    const rootRef = firebase.database().ref().child('teams');
    rootRef.on('child_added', snapshot => {
      let team = snapshot.val();
      this.setState({ routesForDrawer: [team].concat(this.state.routesForDrawer) });
    })
  }

  componentWillMount() {
    this.retrieveSectionsFromDatabase();
    this.retrieveTeamsForDrawer();
    this.retrieveVisualizationsFromDatabase();
    // this.findTeamObject();
    this.setState({ locationForDrawer: this.props.location.pathname });
  }

  findTeamObject() {
    const actualTeam = this.props.match.params.team;
    const result = Routes.filter((obj) => {
      return obj.id === actualTeam;
    });
    this.setState({ actualTeam: result[0], routesForDrawer: Routes});
  }

  render() {
    return (
      <div className={["team-container flex flex-column flex-jc-flex-start flex-ai-center"]}>
        <Drawer goBack={this.props.history.goBack}
                routes={this.state.routesForDrawer}
                actualRouteParams={this.props.match.params}
                locationForDrawer={this.state.locationForDrawer}
                history={this.props.history.push} />
        <div className={["team-title flex flex-row flex-all-center default-primary-color text-primary-color "]}>
          <h2>
            { this.state.actualTeam }
          </h2>
        </div>
        <div className={["team-content-container flex flex-row flex-all-center"]}>
          <div className={["team-content flex flex-row flex-wrap flex-jc-space-around"]}>
          {
            // Sections containers
            this.state.sections.map((Section, i) =>
              <div key={i}
                className={["section-container flex flex-column"]}>
                <h3 className={["section-title divider-color default-primary-color  text-primary-color"]}>
                  {Section.title}
                </h3>
                <div className={["section-content flex flex-row flex-jc-space-evenly flex-wrap"]}>
                {
                  // Visualization
                  this.retrieveVisualizationsFromSection(Section.id).map((Visualization, j) =>
                    <Link key={j}
                          to={'/visualization/' + this.state.actualTeam +
                              '/' + Section.id + '/' + Visualization.id  }
                          className={["visualization-container flex flex-column flex-all-center"]} >
                      <div className={["visualization-icon flex flex-all-center secondary-text-color"]}>
                       <Glyphicon glyph={ Visualization.icon }/>
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
