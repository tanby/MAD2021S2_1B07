import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
  } from 'react-native';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-gesture-handler';

const MyComp = (props) =>{
    // add a state to store what the user enter into input
    // syntax [getter, setter] = useState({default value})
    const [txt, setTxt] = useState("default value");
    // add event listener to update txt
    const updateTxt = (newtext) => {
        // call the setter
        setTxt(newtext);
    }
    const buttonclick = () =>{
        // show alert dialog
        alert("text entered: " + txt);
    }

    return (
        <View style={{backgroundColor:"#FCC"}}>
            <TextInput value={txt} onChangeText={updateTxt} />
            <Text style={{fontSize:24, margin:8}}>{props.mytext}</Text>
            <Button title="Show user input" onPress={buttonclick} />
        </View>
    );
}
// what is the data type of the prop
MyComp.propTypes = {
    mytext : PropTypes.string
}
// what is the default value for the prop
MyComp.defaultProps = {
    mytext: "this is a default message"
}

export default MyComp;