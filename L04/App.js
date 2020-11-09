/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 // direct copy from L04 PPT
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  // state demo
  state = { tired:100 }
  render(){
    // use JSX to render UI
    // reuse custom Component below, changing the props
    return(
      <View>
        <Text>1B07 is at tired level: {this.state.tired}</Text>
        <TBY myspecial="this is a props passed to TBY" />
        <TBY myspecial="reuse this component" />
      </View>
    );
  }
}

// props demo
// create a separate Component to use for the App
class TBY extends React.Component {
  render(props){
    // use JSX to render UI
    // use a prop to customise the text rendered
    return(
      <View>
        <Text>{this.props.myspecial}</Text>
      </View>
    );
  }
  
}
export {TBY};