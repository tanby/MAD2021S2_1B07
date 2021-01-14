import React from 'react';
import {
    View,
    Text,
  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import all the screens
import HomeScreen from './home';
import Page2Screen from './pg2';
import Page3Screen from './pg3';

const Stack = createStackNavigator();

// new component as a new page
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Page2" component={Page2Screen} />
                <Stack.Screen name="Page 3" component={Page3Screen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default App;