import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './common';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDXvIV7cgEi36U6UXr9QNsVXtc5oFAWXrE',
    authDomain: 'authentication-87a99.firebaseapp.com',
    databaseURL: 'https://authentication-87a99.firebaseio.com',
    projectId: 'authentication-87a99',
    storageBucket: 'authentication-87a99.appspot.com',
    messagingSenderId: '869996393035'
  });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
