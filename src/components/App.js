import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './common';
import LoginForm from './LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDXvIV7cgEi36U6UXr9QNsVXtc5oFAWXrE',
      authDomain: 'authentication-87a99.firebaseapp.com',
      databaseURL: 'https://authentication-87a99.firebaseio.com',
      projectId: 'authentication-87a99',
      storageBucket: 'authentication-87a99.appspot.com',
      messagingSenderId: '869996393035'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      <Button>Log Out</Button>
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />
    }
  };

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
