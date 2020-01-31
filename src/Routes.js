import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import Singup from './signup'
import SignIn from './signin'
import Home from './home'
import QuizHome from './Quiz'
import Menu from './menu'
import Definations from './Definations'
import Questions from './Questions'
import Splashscreen from './SplashScreen'
import Guide from './Guide'
import firebase from 'firebase'
Splashscreen

class Route extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Actions.Menu()
      }

    })
  }
  
  render() {
    return (
      <Router>
        <Scene>
          <Scene key='QuizHome' component={QuizHome} hideNavBar={true} />
          <Scene key='Questions' component={Questions} hideNavBar={true} />
          <Scene key='Home' component={Home} hideNavBar={true} />
          <Scene key='Splashscreen' component={Splashscreen} hideNavBar={true} />
          <Scene key='Definations' component={Definations} hideNavBar={true} />
          <Scene key='Signin' component={SignIn} hideNavBar={true} />
          <Scene key='Menu' component={Menu} hideNavBar={true} />
          <Scene key='Singup' component={Singup} hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}

export default Route