// assume another member create this Component 

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// function style component
Greeting = (props) => {
    return(
        <View>
            <Text style={{ fontSize:20, textAlign:'center'}}>
                Hello this is {props.Nemo}</Text>
        </View>
    );
}

// export this component so that we can import in another component
export default Greeting;