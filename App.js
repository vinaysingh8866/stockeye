import React, {useState} from 'react';
import { Image, Text, StyleSheet, View, SafeAreaView, Slider } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from "react-native";
import Backgroud from './components/Backgroud';
import {LineCartBar} from './components/LineCartBar'
import {LoginPage} from './ui/LoginPage'
import { LoadingScreen } from './ui/LoadingScreen'
import { DashboardScreen } from './ui/DashboardScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Portfolio} from './ui/Portfolio'
import * as firebase from 'firebase'
import { firebaseConfig } from './config';


const ShadowPropSlider = ({ label, value, ...props }) => {
  return (
    <>
      <Text>
        {label} ({value.toFixed(2)})
      </Text>
      <Slider step={1} value={value} {...props} />
    </>
  );
};


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})


const AppNavigator = createAppContainer(AppSwitchNavigator);
firebase.initializeApp(firebaseConfig)
export default function App() {
  return (
    <View style={styles.container}>

      <AppNavigator />

    </View>
  );
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

const data = {
  x: [1, 2, 3, 4, 5],
  y: [1, 2, 3, 4, 8],
  type: 'scatter',
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
    <SafeAreaView>
    <LineCartBar/>
    <LineCartBar/>
    </SafeAreaView>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


const layout = { title: 'My cool chart!' }; 
const App =() => {

  return (
    

    <NavigationContainer>
      <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'grey',
          style: {
            borderTopColor: '#66666666',
            backgroundColor: '#F2F0F0',
            elevation: 3,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
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