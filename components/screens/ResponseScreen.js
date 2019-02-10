/*
Linked to HomeScreen in App.js with react-navigation
Gets json movies data from server
*/

import React from 'react';

import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Button,
} from 'react-native';

import { SafeAreaView } from 'react-navigation';

import BackButton from '../BackButton.js';
const axios = require('axios');

export default class ResponseScreen extends React.Component {
    // Called before componentDidMount
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }
    // http://127.0.0.1:5000/
    componentDidMount() {
        axios.get(`http://10.0.2.2:5000/`)
            .then(res => {
                const source = res.data;
                console.log(source);
                this.setState({ isLoading: false });
            })
        // function getGithubData() {
        //     axios.get('http://127.0.0.1:5000/')
        //         .then(res => {
        //             console.log(res.data);
        //             this.setState({
        //                 isLoading: false,
        //             });
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         });
        // }

        // getGithubData();
        // return fetch('http://127.0.0.1:5000/')
        //     .then((response) => response.json())
        //     .then((responseJson) => {

        //         this.setState({
        //             isLoading: false,
        //             dataSource: responseJson,
        //         }, function () {

        //         });

        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
    static navigationOptions = {
        header: null
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerView}>
                    <BackButton navigation={this.props.navigation} />
                    <Text style={styles.headerText}>Response</Text>
                    <Text>{this.state.dataSource}</Text>
                </View>
            </SafeAreaView >
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'white'
    },
    headerText: {
        alignSelf: 'center',
        paddingLeft: 20,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
});