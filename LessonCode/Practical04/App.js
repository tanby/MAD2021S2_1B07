/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// ref: https://momentjs.com/
import moment from 'moment';
// import our special Finding Nemo Component
import Finding from './Greeting';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  //---constructor for the class---
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("LTS"),      // e.g. 9:45:25 PM
      date: moment().format("LL")        // e.g. May 12, 2017
    };
  }

  //===lifecycle hooks===

  //---runs after the component output has been rendered to 
  // the DOM (when render() has been called)---
  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({
        time: moment().format("LTS"),
        date: moment().format("LL")
      }), 1000                      // the 2 states are changed every second
    );
  }

  //---runs before the component is removed---
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <View>
        <Finding Nemo="Lee Xin" />
        <Finding Nemo="Janelle" />
        <Text style={styles.dateText}>
          Today Date: {this.state.date}
        </Text> 
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
   timeText: {
    color: '#999999',
    fontSize: 65,
  },

  dateText: {
    color: 'blue',
    fontSize: 24,
    textAlign: 'center'
  },
});

