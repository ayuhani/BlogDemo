import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
// import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ChatScreen from './ChatScreen';
import EditInfoScreen from './EditInfoScreen';
//
// const HomeScreen = ({navigation}) => (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//           onPress={() => navigation.navigate('Detail')}
//           title='Go to Detail'/>
//     </View>
// );
//
// const DetailScreen = () => (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Detail Screen</Text>
//     </View>
// );

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const {navigate} = this.props.navigation;
    return <View>
      <Text>Hello, Chat App!</Text>
      <Button
          onPress={() => navigate('Chat', {user: 'Lucy'})}
          title={"Chat with " + this.props.screenProps.title}
      />
    </View>
  }
}

var routeConfigs = {
  Home: {
    screen: HomeScreen
  },
  Chat: {
    screen: ChatScreen,
  },
  Edit: {
    screen: EditInfoScreen
  },
};

var stackNavigatorConfig = {
  // initialRouteName: 'Home',
  // 这里可以对标题栏进行通用设置
  // 但是当某个页面单独设置了 navigationOptions，会覆盖通用效果
}

const RootNavigator = StackNavigator(routeConfigs, stackNavigatorConfig);

export default RootNavigator;