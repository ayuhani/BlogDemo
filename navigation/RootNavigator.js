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
          title="Chat with Lucy"
      />
    </View>
  }
}

const RootNavigator =
StackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  // 如果你想导航到一个页面，就按照下面的方式创建它
  Chat: {
    // `ChatScreen` is a React component that will be the main content of the screen.
    // ChatScreen 就是一个将要显示在屏幕上的 React 组件
    screen: ChatScreen,
    // When `ChatScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
    // 当 ChatScreen 被 StackNavigator 加载的时候，它会被赋予一个 navigation 属性

    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    // 可选的：当在 Web 应用程序中进行深度链接或使用 react-navigation 时，才会用到 path
    path: 'people/:name',
    // The action and route params are extracted from the path.
    // action 和 route 的参数是从 path 中提取的

    // Optional: Override the `navigationOptions` for the screen
    // 可选的：可以在这里重写 navigationOptions，你也可以直接写在 ChatScreen 中（上一篇文章讲的）
    navigationOptions: ({navigation}) => ({
      title: `Chat with ${navigation.state.params.user}`,
    })
  },

  // 以下省略其他的路由（页面）
  ...MyOtherRoutes
});

export default RootNavigator;