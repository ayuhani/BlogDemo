/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import MyView, {name, age, sum} from './MyView';


export default class App extends Component<{}> {

  render() {
    let view = <View style={{flex: 1, backgroundColor: 'gray', flexDirection: 'row', flexWrap: 'wrap'}}>
      <Text style={[styles.common, {backgroundColor: 'red'}]}>1</Text>
      <Text style={[styles.common, {backgroundColor: 'green'}]}>2</Text>
      <Text style={[styles.common, {backgroundColor: 'blue'}]}>3</Text>
      <Text style={[styles.common, {backgroundColor: 'brown'}]}>4</Text>
    </View>;
    return view;
  }
}

const styles = StyleSheet.create({
  common: {
    width: 100,
    height: 48,
    margin: 8,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})


