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
    Alert
} from 'react-native';

import {
    StackActions,
    NavigationActions,
    SafeAreaView,
} from 'react-navigation'; // 3.0.9

import { accelerometer } from "react-native-sensors";

// const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
//     console.log({ x, y, z, timestamp })
// );
// export default class SpeedButton extends Component {
//     render() {
//         return (
//             <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Sites') }} >
//                 <Icon name="arrowleft" size={60} color="white" />
//             </TouchableOpacity>
//         );
//     }
// }

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            speedLimit: 35,
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

                console.log("prevPos.lat: " + prevPos.latitude);
                console.log("prevPos.long: " + prevPos.longitude);
                console.log("toPos.lat: " + toPos.latitude);
                console.log("toPos.long: " + toPos.longitude);
                console.log("totalDist: " + totalDistance);

                // console.log(response);

                let time = new Date(response.timestamp).getSeconds();
                let speed = currentDistance / (1 / 3600);

                // console.log("DISTANCE: " + currentDistance);
                // console.log("TIME(Seconds): " + time);
                // console.log("SPEED: " + speed);

                let totalDistance = this.state.totalDistance + currentDistance;
                let totalDuration = this.state.totalDuration + (1 / 3600);
                let averageSpeed = totalDistance / totalDuration;

                if (averageSpeed >= this.state.speedLimit) {
                    Alert("Slow Down");
                }

                if (toPos.latitude > 10) {
                    this.setState({ speedLimit: 35 });
                }

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
                    <Text style={styles.headerText}>Slow Down Demo</Text>
                </View>
                {/* <Button title="Go to Response Screen" onPress={() => { this.props.navigation.navigate("Response") }} /> */}

                <Text style={styles.speedLimitText}>Speed Limit: {this.state.speedLimit} mph</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.setState(() => ({
                            speedLimit: 35
                        }));
                    }}>
                    <Text style={styles.buttonText}>Set speed limit to 35</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.setState(() => ({
                            speedLimit: 45
                        }));
                    }}>
                    <Text style={styles.buttonText}>Set speed limit to 45</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.setState(() => ({
                            speedLimit: 65
                        }));
                    }}>
                    <Text style={styles.buttonText}>Set speed limit to 65</Text>
                </TouchableOpacity>
                <Text style={styles.stats}>SPEED: {this.state.speed}</Text>
                <Text style={styles.stats}>AVERAGE SPEED: {this.state.averageSpeed}</Text>
                <Text style={styles.stats}>LATITUDE: {this.state.previousPosition.latitude}</Text>
                <Text style={styles.stats}>LONGITUDE: {this.state.previousPosition.longitude}</Text>
                <Text style={styles.stats}>TOTAL DISTANCE: {this.state.totalDistance}</Text>
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
        height: 80,
        backgroundColor: "#092E99",
        justifyContent: 'center',
        color: 'white'
    },
    headerText: {
        fontSize: 42,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    siteItem: {
        fontSize: 32,
        backgroundColor: 'white',
        color: 'black'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 32,
        color: 'white'
    },
    button: {
        height: 80,
        backgroundColor: "#178711",
        justifyContent: 'center',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    speedLimitText: {
        textAlign: 'center',
        height: 60,
        backgroundColor: 'white',
        fontSize: 45,
    },
    stats: {
        fontSize: 24
    }
});