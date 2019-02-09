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

export default class ResponseScreen extends React.Component {
    // Called before componentDidMount
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        return fetch('https://roads.googleapis.com/v1/speedLimits?path=38.75807927603043,-9.03741754643809|38.6896537,-9.1770515|41.1399289,-8.6094075&key=AIzaSyDPiuwrlQuia0JYjY6Ct7jmSfX_a1P4IJs')
            .then((response) => console.log(response))
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
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