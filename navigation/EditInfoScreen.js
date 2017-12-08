import React, {Component} from 'react';
import {
  ActivityIndicator,
  TextInput,
  Button,
  View
} from 'react-native';

export default class EditInfoScreen extends Component {

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    let headerRight = (
        <Button
            title="Save"
            // 如果 params.handleSave 函数存在的话执行，否则执行空函数
            onPress={params.handleSave ? params.handleSave : () => null}
        />
    );
    if (params.isSaving) {
      headerRight = <ActivityIndicator/>;
    }
    return {
      title: 'Example',
      headerRight: headerRight
    }
  };

  state = {
    nickname: 'Lucy jacuzzi'
  }

  _handleSave = () => {
    // Update state, show ActivityIndicator
    this.props.navigation.setParams({isSaving: true});

    // Fictional function to save information in a store somewhere
    // saveInfo().then(() => {
    //   this.props.navigation.setParams({isSaving: false});
    // })
  }

  componentDidMount() {
    // We can only set the function after the component has been initialized
    this.props.navigation.setParams({handleSave: this._handleSave});
  }

  render() {
    const {goBack, state} = this.props.navigation;
    return (
        <View>
          <TextInput
              onChangeText={(nickname) => this.setState({nickname})}
              placeholder={'Nickname'}
              value={this.state.nickname}
          />
          <Button
              onPress={() => goBack()}
              title="Go back from this EditInfoScreen"
          />
          <Button
              onPress={() => goBack(null)}
              title="Go back anywhere"
          />
          <Button
              onPress={() => goBack(state.params.key)}
              title="Go back to HomeScreen"
          />
        </View>
    );
  }
}