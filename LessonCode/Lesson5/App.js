/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, Button ,View } from 'react-native';

class App extends Component{
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }

  // create a dummy state for demo
  state = {
    energy: -200
  }

  // sample event handler for button
  buttonPress = () => {
    this.setState({
      //energy: -500
      energy: this.state.energy -100
    });
  }

  render(){
    // return JSX for UI
    return(
      <View>
        <Text style={{ fontSize: 60}}>
          Hello new app inside subfolder: {this.state.energy}
        </Text>
        <Button onPress={this.buttonPress} title="Increase" />
      </View>
    );
  }
}

export default App;
