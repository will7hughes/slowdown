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
    constructor(props) {
        super(props)

        this.state = {
            speed: 0,
            averageSpeed: 0,
            previousPosition: {
                latitude: null,
                longitude: null
            },
            totalDistance: null,
            totalDuration: 0
        };

        console.log("HALLO");


        setInterval(() => (
            navigator.geolocation.getCurrentPosition((response) => {
                let toPos = {
                    latitude: response.coords.latitude,
                    longitude: response.coords.longitude
                };

                let prevPos = this.state.previousPosition;

                if (prevPos.latitude == null)
                    prevPos = toPos;

                let currentDistance = this.calculateDistance(prevPos.latitude, prevPos.longitude, toPos.latitude, toPos.longitude, "K");

                // console.log("prevPos.lat: " + prevPos.latitude);
                // console.log("prevPos.long: " + prevPos.longitude);
                // console.log("toPos.lat: " + toPos.latitude);
                // console.log("toPos.long: " + toPos.longitude);
                // console.log("totalDist: " + totalDistance);

                // console.log(response);

                let time = new Date(response.timestamp).getSeconds();
                let speed = currentDistance / (1 / 3600);

                // console.log("DISTANCE: " + currentDistance);
                // console.log("TIME(Seconds): " + time);
                // console.log("SPEED: " + speed);

                let totalDistance = this.state.totalDistance + currentDistance;
                let totalDuration = this.state.totalDuration + (1 / 3600);
                let averageSpeed = totalDistance / totalDuration;

                this.setState({
                    speed: speed,
                    averageSpeed: averageSpeed,
                    totalDuration: totalDuration,
                    previousPosition: {
                        latitude: response.coords.latitude,
                        longitude: response.coords.longitude
                    },
                    totalDistance: totalDistance
                });
                // console.log(response.coords);
            }, null, null)
        ), 1000);
    }

    calculateDistance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") { dist = dist * 1.609344 }
            if (unit == "N") { dist = dist * 0.8684 }
            return dist;
        }
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((response) => {
            this.setState({ speed: response.coords.speed });
            console.log(response.coords.speed);
        }, null, null);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>Home</Text>
                </View>
                <Button title="Go to Response Screen" onPress={() => { this.props.navigation.navigate("Response") }} />
                <Text>SPEED: {this.state.speed}</Text>
                <Text>AVG SPEED: {this.state.averageSpeed}</Text>
                <Text>Lati: {this.state.previousPosition.latitude}</Text>
                <Text>Long: {this.state.previousPosition.longitude}</Text>
                <Text>TotalDistance: {this.state.totalDistance}</Text>
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