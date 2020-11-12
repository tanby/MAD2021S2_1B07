/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// direct copy from L04 PPT
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// demo component using function
const App = () => {
  // return JSX
  return(
    <View style={st.background}>
      <Text style={st.bigsize}>Hello using function!</Text>
    </View>
  );
}
// use default export
export default App;

// demo stylesheet
const st = StyleSheet.create(
  {
    bigsize: {
      fontSize: 80,
      padding: 16
    },
    background: {
      backgroundColor: "red"
    }
  }
);