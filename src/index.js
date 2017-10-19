import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/App/index.js';

import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: "AIzaSyAdtdJ6aQ8IPaQExMV69slxkICpdVFsfOU",
  authDomain: "tableau-web-app-db-818.firebaseapp.com",
  databaseURL: "https://tableau-web-app-db-818.firebaseio.com",
  projectId: "tableau-web-app-db-818",
  storageBucket: "tableau-web-app-db-818.appspot.com",
  messagingSenderId: "429057171791"
};
firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
