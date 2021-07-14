import React from 'react';
import { Image, Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from "react-native";
import Backgroud from './components/Backgroud';
import {LineCartBar} from './components/LineCartBar'
import {LoginPage} from './ui/LoginPage'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





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
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    
  );
};

const styles = StyleSheet.create({
  textLooks:{
    color:'pink',
    fontSize:50,

  }
});


export default App;