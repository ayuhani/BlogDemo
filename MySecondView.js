import React, {Component} from 'react';
import {
  Text
} from 'react-native';

export default class MySecondView extends Component {
  render() {
    return <Text
        style={{backgroundColor: 'cyan'}}>
      你好{this.props.name}{'\n'}年龄{this.props.age}{'\n'}性别{this.props.sex}
    </Text>
  }
}