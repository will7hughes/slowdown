import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.arrowleft} onPress={() => { this.props.navigation.navigate('Home') }} >
                <Icon name="arrowleft" size={60} color="white" />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    arrowleft: {
        backgroundColor: '#092E99',
        width: 60
    }
});