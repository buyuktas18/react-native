import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity

} from 'react-native';
//import Splash from './Splash';
//import Login from './Login';
export default class LoginForm extends Component{
    render(){

        return (
            <View style={StyleSheet.container}>
                <TextInput placeholder="username"
                placeholderTextColor ="rgba(255,255,255,0.7)"
                style={styles.input} />
                <TextInput placeholder="e-mail"
                placeholderTextColor ="rgba(255,255,255,0.7)"
                style={styles.input} />
                <TextInput 
                placeholder="password"
                placeholderTextColor ="rgba(255,255,255,0.7)"
                style={styles.input}
                secureTextEntry />
                <TextInput 
                placeholder="password again"
                placeholderTextColor ="rgba(255,255,255,0.7)"
                style={styles.input}
                secureTextEntry />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        );

    }
}
    const styles = StyleSheet.create({
        container: {
            padding: 20
        },
        input:{ 
            height: 40,
            backgroundColor: '#450808',
            color: '#FFF',
            paddingHorizontal: 20,
            marginBottom: 20,
            borderRadius: 20
            
            
        },
        button: {
            backgroundColor: '#37235E',
            paddingVertical: 10,
            borderRadius: 20
        },
        buttonText:{
            textAlign: 'center',
            color: '#FFFFFF'
        } 
    });