 import React, {useState, useEffect} from 'react';
 import ReactDOM from 'react-dom';
import { Image, Text, StyleSheet, View, SafeAreaView, Slider } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from "react-native";
import Backgroud from './components/Backgroud';
import {LineCartBar} from './components/LineCartBar'
import {LoginPage} from './ui/LoginPage'
import { LoadingScreen } from './ui/LoadingScreen.js'
//import { DashboardScreen } from './ui/DashboardScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Portfolio} from './ui/Portfolio'
import * as firebase from 'firebase'
import { firebaseConfig } from './config';
import HomePage from './ui/HomePage';
import Icon from 'react-native-vector-icons/AntDesign';



var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

const data = {
  x: [1, 2, 3, 4, 5],
  y: [1, 2, 3, 4, 8],
  type: 'scatter',
};

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Login':
      iconName = 'appstore-o';
      break;
    case 'Portfolio':
      iconName = 'folder1';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

const Tab = createBottomTabNavigator();
const App =() => {

  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'grey',
          style: {
            width:'80%',
            height:60,
            marginBottom:10,
            marginStart:'10%',
            borderTopColor: '#66666666',
            backgroundColor: '#ecf0f1',
            borderRadius:16,
            elevation: 3,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Portfolio" component={Portfolio} />
        <Tab.Screen name="Login" component={LoginPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  square: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    height: 150,
    shadowColor: 'black',
    width: 150,
  },
  controls: {
    paddingHorizontal: 12,
  },
});
export default App;

