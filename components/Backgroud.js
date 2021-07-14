import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export class Backgroud extends Component {
    render() {
        return (
            
                <LinearGradient
                style={styles.back}
                colors={['#4c669f', '#3b5998', '#192f6a']}/>
            
        )
    }
    
}

const styles = StyleSheet.create({
    back: {
      width:width,
      height:height,
      zIndex:10,
    }
  });



export default Backgroud
