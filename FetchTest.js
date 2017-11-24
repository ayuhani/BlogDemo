import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import HttpUtil from './HttpUtil';

export default class FetchTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '返回结果'
    }
  }

  get() {
    HttpUtil.get('https://facebook.github.io/react-native/movies.json')
        .then(result => this.setState({text: JSON.stringify(result)}))
        .catch(error => console.error(error))
  }

  post() {
    var data = {username: 'ayuhani', password: '123456'}
    HttpUtil.post('http://rapapi.org/mockjsdata/26411/ayuhani/post', data)
        .then(result => this.setState({text: JSON.stringify(result)}))
        .catch(error => console.error(error))
  }

  render() {
    return <View style={{flex: 1}}>
      <View style={{margin: 16}}>
        <Button
            title={'get'}
            onPress={() => this.get()}
        />
        <Button
            title={'post'}
            onPress={() => this.post()}
        />
        <Text style={{marginTop: 16}}>{this.state.text}</Text>
      </View>
    </View>
  }
}