import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class ChatScreen extends Component {

  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
          <Button
              title={isInfo ? 'Done' : `${user}'s info`}
              onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}
          />
      )
    }
  };

  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    // 屏幕当前的路由被传递给了 `props.navigation.state`
    const {goBack, navigate, state} = this.props.navigation;
    return (
        <View>
          <Text>Chat with {state.params.user}</Text>
          <Button
              onPress={() => goBack()}
              title="Go back from this ChatScreen"
          />
          <Button
              onPress={() => goBack(null)}
              title="Go back anywhere"
          />
          <Button
              onPress={() => goBack(state.key)}
              title="Go back from Chat"
          />
          <Button
              onPress={() => navigate('Edit', {key: state.key})}
              title="Go to EditInfoScreen"
          />
        </View>
    );
  }
}