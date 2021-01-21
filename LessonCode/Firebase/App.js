import React, { useState } from "react";
import { View, Text, Button } from "react-native";



// create a new component to read from Firebase
const FirebaseApp = () =>{
    // create state to store data
    // default is empty object
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    // listener for button
    const buttonPress = ()=>{
        fetchData();
    }
    // sample function to read Firebase data
    const fetchData = () => {
        fetch('https://mapp2019-6d4f1.firebaseio.com/products.json')
          .then((response) => response.json())
          .then((json) => {
            setData(json); // store into state
            console.log(data);
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    
    return (
        <View>
            <Text style={{fontSize:32}}>Hello firebase</Text>
            <Button title="Load Data" onPress={buttonPress} />
            <Text style={{fontSize:32}}>{data['p2'].price}</Text>
        </View>
    );
}

export default FirebaseApp;