/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * Practical 3 – Flexbox Column
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class App extends Component{
  render() {
    return (
      // 
      // Setting flexDirection to row 
      // Try change the `flexDirection` to `column`.
      // modify the justifyContent props below. try out: 
      // flex-start, center, flex-end, space-around, space-between and space-evenly
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',}}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
      </View>
    );
  }
}
