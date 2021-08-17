 import React, {useState, useEffect, Component} from 'react';

import { Image, Text, StyleSheet, View, SafeAreaView,TouchableOpacity, Slider } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
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
import StrategyPage from './ui/StrategyPage';
import Learning from './ui/Learning';



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
    case 'Strategy':
      iconName = 'appstore-o';
      break;
    case 'Portfolio':
      iconName = 'folder1';
      break;
    case 'Learning':
      iconName = 'book';
      break;

    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};


checkIfLoggedIn = () => {
  firebase.auth().onAuthStateChanged(function (user) {
      if (user) {

          this.props.navigation.navigate('Home')

      } else {

          this.props.navigation.navigate('LoginScreen')

      }
  }.bind(this))
}


firebase.initializeApp(firebaseConfig)
const Tab = createBottomTabNavigator();



const myStyle = {
  width:'80%',
  height:50,
  marginBottom:20,
  marginTop:20,
  paddingTop:6,
  paddingLeft:6,
  paddingRight:6,
  marginStart:'10%',
  paddingBottom: 6,
  //borderTopColor: '#66666666',
  backgroundColor: '#F2F0F0',
  borderRadius:16,
  elevation: 3,
  shadowOpacity:3,
  shadowColor:'black',
  shadowRadius:2,
  shadowOffset:{width:0, height:0},
  shadowOpacity:0.09
}

export class Dash extends Component {
  render() {
    return (
        <NavigationContainer>
          <Tab.Navigator 
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route, color),
          })}

            tabBarOptions={{
              activeTintColor: 'black',
              inactiveTintColor: 'grey',
              activeBackgroundColor: '#F2F0F0',
              inactiveBackgroundColor: '#F2F0F0',

              tabStyle: {
                shadowColor:'green',
                shadowRadius:1,
                shadowOffset:{width:-3, height:-3},
              },
              style: {
                width:'80%',
                height:50,
                marginBottom:20,
                marginTop:20,
                paddingTop:6,
                paddingLeft:6,
                paddingRight:6,
                marginStart:'10%',
                paddingBottom: 6,
                //borderTopColor: '#66666666',
                backgroundColor: '#F2F0F0',
                borderRadius:16,
                elevation: 3,
                shadowOpacity:3,
                shadowColor:'black',
                shadowRadius:2,
                shadowOffset:{width:0, height:0},
                shadowOpacity:0.2
              },
            }}
          >
            
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Portfolio" component={Portfolio} />
        <Tab.Screen name="Strategy" component={StrategyPage} />
        <Tab.Screen name="Learning" component={Learning}/>
        </Tab.Navigator>
      
    </NavigationContainer>
    
    
    )
  }
}


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginPage,
  DashboardScreen: Dash
})


const AppNavigator = createAppContainer(AppSwitchNavigator);

const App =() => {  
  return (
    <View style={{width:'100%', height:'100%', backgroundColor:'#F2F0F0'}}>
    <Dash/>
    </View>
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

