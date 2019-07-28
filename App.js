/*
import React, { Component } from 'react';

import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends Component<{}> {


  SampleFunction1(){

    Alert.alert("Function Without Argument");
    
  }

  SampleFunction2(StringHolder){

    Alert.alert(StringHolder);

  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{margin: 10}}>
       
       <Button onPress={ this.SampleFunction1.bind(this) } title=" Click Here To Call Function - 1 " />

        </View>

        <View style={{margin: 10}}>

       <Button onPress={ this.SampleFunction2.bind(this, "Function With Argument Text") } title=" Click Here To Call Function - 2 " />

        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    margin: 10
  }
});

import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
 
export default class App extends Component<{}> {
 
 
  SampleFunction1(){
 
    Alert.alert("Deniz");
    
  }
 
  SampleFunction2(StringHolder){
 
    Alert.alert(StringHolder);
 
  }
 
  render() {
    return (
      <View style={styles.container}>
 
        <View style={{margin: 10}}>
       
       <Button onPress={ this.SampleFunction1.bind(this) } title=" name " />
 	
        </View>
 
        <View style={{margin: 10}}>
 
       <Button onPress={ this.SampleFunction2.bind(this, "Buyuktas") } title=" surname " />
 
        </View>
 
      </View>
    );
  }
}
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    margin: 10
  }
});
*/

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import LoginForm from './LoginForm';
import MainScreen from './MainScreen';
//import Splash from './Splash';
//import Login from './Login';
import { createStackNavigator, createAppContainer } from 'react-navigation'


const AppStackNavigator = createStackNavigator({

  Main: {
    screen: MainScreen
  }
})

const App = createAppContainer(AppStackNavigator);

export default App;



const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#65737E',
    
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  }
});
