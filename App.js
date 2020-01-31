

import React, { Component } from 'react';
import Routes from './src/Routes'
import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyC_20GL1eZOumlZZ1UeS6VEyYXRvPZXT5c",
  authDomain: "signin-aa6dd.firebaseapp.com",
  databaseURL: "https://signin-aa6dd.firebaseio.com",
  projectId: "signin-aa6dd",
  storageBucket: "signin-aa6dd.appspot.com",
  messagingSenderId: "680677849487"
};
firebase.initializeApp(config);
export default class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}


