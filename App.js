/*
Setup react-navigation and link screens
*/

import React from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';

import { createAppContainer, createStackNavigator, StackActions, NavigationActions, StackNavigator, RouteConfiguration, } from 'react-navigation'; // 3.0.9
import HomeScreen from './components/screens/HomeScreen';
import ResponseScreen from './components/screens/ResponseScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Response: {
    screen: ResponseScreen,
  },
},
  {
    initialRouteName: 'Home',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 185,
        easing: Easing.ease
      },
    }),
  });

// Makes accessable to React-Native
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});