import React, { Component, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Picker, Button, TouchableOpacity } from 'react-native'




export class StrategyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "MACD"
        };
      }
      
    render() {
        
        return (
            <SafeAreaView>

                <View style={styles.container}>
                    <Picker
                        selectedValue={this.state.value}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({value: itemValue})}
                        >
                        <Picker.Item label="RSI" value="RSI" />
                        <Picker.Item label="BBP" value="BBP" />
                        <Picker.Item label="MACD" value="MACD" />
                    </Picker>
                </View>
                
                <TouchableOpacity styles={{backgroundColor:"pink", borderRadius:4}}>
                    <Text>
                        Add
                    </Text>
                </TouchableOpacity>
                
            </SafeAreaView>
        )
    }
}

export default StrategyPage
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