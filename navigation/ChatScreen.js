import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class ChatScreen extends Component {

  // Nav options can be defined as a function of the screen's props:
  // Nav options 可以被定义成一个页面属性的函数（原谅我英语太差）
  // 格式就像下面这样，你就可以取到 navigation 了
  // static navigationOptions = ({navigation}) => ({
  //   title: `Chat with ${navigation.state.params.user}`,
  // });

  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    // 屏幕当前的路由被传递给了 `props.navigation.state`
    const {params} = this.props.navigation.state;
    return (
        <View>
          <Text>Chat with {params.user}</Text>
        </View>
    );
  }
}