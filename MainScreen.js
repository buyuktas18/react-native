import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {Icon} from 'react-native-elements'
import HomeTab from './HomeTab';
import SearchTab from './SearchTab';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
class MainScreen extends Component {
    static navigationOptions = {
        headerleft: <Icon style={StyleSheet.iconleft} name='rowing'/>,
        title: "App",
        headerRight: <Icon style={StyleSheet.iconright} name='comment'/>
    }

    render(){
        return (
            <AppTabNavigator />
        );
    }
}
//export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({

    HomeTab: { screen: HomeTab },
  SearchTab: { screen: SearchTab },

});

/*}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'black'
                    }
                })
            },
            activeTintColor: 'red',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
    })*/
  
    export default createAppContainer(AppTabNavigator);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconleft: {
        paddingLeft: 10
    },
    iconright: {
        paddingRight: 100
    }
});