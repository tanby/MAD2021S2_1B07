import React from "react";
import { View } from "react-native";
// step 1 import custom component
import CustomComp from "./custom";

class App extends React.Component{
    render(){
        return (
            <View>
                <CustomComp text="Hello 1B07" />
                <CustomComp text="Happy new year!"/>
            </View>
        );
    }
}
export default App;