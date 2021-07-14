import React from 'react';
import { Image, Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from "react-native";
import Backgroud from './components/Backgroud';
import {LineCartBar} from './components/LineCartBar'






var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

const data = {
  x: [1, 2, 3, 4, 5],
  y: [1, 2, 3, 4, 8],
  type: 'scatter',
};

const layout = { title: 'My cool chart!' }; 
const App =() => {
  return (
    
    <SafeAreaView>
    
    <LineCartBar/>

    <LineCartBar/>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  textLooks:{
    color:'pink',
    fontSize:50,

  }
});


export default App;