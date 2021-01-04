import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  SectionList
} from "react-native";

// my custom made component
class MyCustom2 extends React.Component{
    render(){
        // props
        const { text} = this.props;
        return (
            <View>
                <Text style={{fontSize:18, margin:16, backgroundColor:"#CCC"}}>{text}</Text>
            </View>
        );
    }
}
export default MyCustom2;