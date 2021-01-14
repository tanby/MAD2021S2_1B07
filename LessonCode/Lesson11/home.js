import React from 'react';
import {
    View,
    Text,
    Button,
  } from 'react-native';
// import my special component
import MyComp from './components/mycomp';

// add in navigation prop
const HomeScreen = ({navigation}) =>{
    // event listener
    const buttonclick = () =>{
        navigation.navigate("Page2");
    }
    const goto3 = () =>{
        navigation.navigate("Page 3");
    }
    return (
        <View>
            <Text>this is home screen</Text>
            <Text>blah blah</Text>
            <MyComp  />
            <MyComp mytext="2nd one can change" />
            <Button title="go to Page 2" onPress={buttonclick} />
            <Button title="go to Page 3" onPress={goto3} />
        </View>
    );
}
export default HomeScreen;