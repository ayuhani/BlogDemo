import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import FetchText from './FetchTest';
import RootNavigator from './navigation/RootNavigator';

class Main extends Component {
  render() {
    return <RootNavigator
        screenProps={{title: 'Lucy'}}
    />
  }
}

AppRegistry.registerComponent('BlogDemo', () => Main);
