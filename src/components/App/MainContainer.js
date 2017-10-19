import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

import '../../flexbox.css';

import Routes from '../../routes.js';

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    }
  }

  goTo(route) {
  }

  componentWillMount() {
    this.setState({ teams: [] });
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('teams');
    rootRef.on('child_added', snapshot => {
     /* Update React state when message is added at Firebase Database */
      let team = snapshot.val();
      this.setState({ teams: [team].concat(this.state.teams) });
    })
  }
  render() {
    const routes = Routes;

    return (
      <div style={{height:'100%', textAlign:'center'}}
            className={["default-primary-color text-primary-color  main-container flex flex-column flex-all-center"]}>
        <div className={["main-title"]}>
          <h1>
            Neoris
          </h1>
        </div>
        <br />
        <div className={["main-content flex flex-column"]}>
          <h3 className={["text-primary-color"]}>Equipos:</h3>
          <br />
          {
            this.state.teams.map((route, i) =>
             <Link to={"/team/" + route.id}
                key={i} className={["column-button primary-text-color "]}>
              - {route.title}
             </Link>
            )
          }
        </div>
      </div>
    );
  }
}

export default MainContainer;
