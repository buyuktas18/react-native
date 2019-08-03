import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


class SearchTab extends Component {
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add-circle" style={styles.icon} style={{color: tintColor, fontSize: 35} } />
        )
    }
    

    render(){
        return (
            <View style={StyleSheet.container}>
                <Text>SearchTab</Text>
            </View>
        );
    }
}
export default SearchTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 35
        
    }
});