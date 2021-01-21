import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";



// create a new component to read from Firebase
const FirebaseApp = () =>{
    // create state to store data
    // default is empty object
    const [data, setData] = useState({});
    // state to store data in array
    const [dataArray, setDataArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [result, setResult] = useState("");

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
            // call the function below to convert to array
            setDataArray( processData(json));
            displayResult();
            console.log(data);
            console.log(dataArray);
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    // sample function to convert object to array
    const processData = (data) => {
        //console.log("data loaded: " + data);
        // store everything in array
        var result = [];
        for(var key in data){
          //console.log(key);
          data[key].id=key;
          result.push(data[key]);
        }
        console.log(result);
        //this.setState({data:result}); // assume there is a state, data
        return result;
      }
    
    // function to output a string to display on text
    const displayResult = () =>{
        var result = "";
        for(var i=0; i<dataArray.length; i++){
            result += dataArray[i].name + ": " + 
                dataArray[i].price +"\n";
        }
        setResult(result);
    }

    // load data when component mounted
    useEffect(
        ()=>fetchData(), []
    );

    // sample function to add data
    const addData = (name, price) =>{
        console.log("adding data");
        fetch('https://mapp2019-6d4f1.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'price': price
            })
        }).then((response) => response.json())
        .then((json) => {
            console.log(json);
          return json;
        })
        .catch((error) => {
          console.error(error);
        });;
    }
    // add listener for textinput
    const nameChange = (value) => {
        setName(value);
    }
    const priceChange = (value) => {
        setPrice(value);
    }
    // add listener for button to add product
    const addProduct = ()=>{
        addData(name, Number(price));
    }
    return (
        <View style={{flex:1}}>
            <Text style={{fontSize:32}}>Hello firebase</Text>
            <Button title="Load Data" onPress={buttonPress} />
            <TextInput placeholder="Name" onChangeText={nameChange} value={name}/>
            <TextInput placeholder="Price" onChangeText={priceChange} value={price} />
            <Button title="Add Product" onPress={addProduct} />
            <ScrollView><Text style={{fontSize:32}}>{result}</Text></ScrollView>
            
        </View>
    );
}

export default FirebaseApp;