import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

var name = 'Jack';
const age = 12;
export {name, age};

export default class MyView extends Component {

  render() {
    return <View>
      <Text
          style={{textAlign: 'center', fontSize: 20}}>
        小明的年龄是：{this.props.name}{this.props.age}
      </Text>
    </View>
  }
}

export function sum(a, b) {
  return a + b;
}
