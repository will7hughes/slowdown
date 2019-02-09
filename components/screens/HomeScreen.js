/*
Simple menu to either Get or Send Entry data to server
Does not display here, displays data in EntriesScreen.js
Does not fetch from here, fetch is called in componentDIdMount in EntriesScreen.js
*/

import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';

import {
    StackActions,
    NavigationActions,
    SafeAreaView,
} from 'react-navigation'; // 3.0.9

import { accelerometer } from "react-native-sensors";

const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
    console.log({ x, y, z, timestamp })
);

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>Home</Text>
                </View>
                <Button title="Go to Response Screen" onPress={() => { this.props.navigation.navigate("Response") }} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerView: {
        height: 65,
        backgroundColor: "#092E99",
        justifyContent: 'center',
        color: 'white'
    },
    headerText: {
        fontSize: 30,
        color: 'white',
        paddingLeft: 40,
        fontWeight: 'bold'
    },
    siteItem: {
        fontSize: 32,
        backgroundColor: 'white',
        color: 'black'
    }
});