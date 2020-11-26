/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * Practical - SectionList
 */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";

// You can change the DATA below and observe the change
const DATA = [
  {title: 'A', data: ['Adam', 'Amy']},
  
  {title: 'B', data: ['Banana','Beetroot']},
  
  {title: 'C', data: ['Cherry','Clementine']},

  {title: 'G', data: ['Grape','Guava']},

  {title: 'M', data: ['Mango','Melon']},

  {title: 'O', data: ['Orange','Olive']},

  {title: 'S', data: ['Strawberry','Sweet Potato']},

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

// change the style for the header and observe the change
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   marginHorizontal: 16
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  header: {
    fontSize: 32,
    backgroundColor: "blue",
    color: "#FFF", 
    padding: 8
  },
  title: {
    fontSize: 24
  }
})

export default App;
