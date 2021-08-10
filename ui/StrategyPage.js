import React, { Component, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Picker, Button, TouchableOpacity, Modal, TextInput } from 'react-native'
import ModalAdd from '../components/ModalAdd';




export class StrategyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "MACD",
          isModalVisible:false,
          inputValue:""
        };
      }



      
    render() {
        
        return (
            <SafeAreaView>

                <View style={styles.container}>
                    <View style={{ 
                                marginStart:20,
                                width:150,
                                height:190,
                                borderRadius:16,
                                shadowColor:'black',
                                shadowRadius:1,
                                shadowOffset:{width:3, height:3},
                                shadowOpacity:.1}

                                }>

                            <View style={{ 
                                backgroundColor: 'pink', 
                                //marginLeft:'5%', 
                                width:'100%', 
                                height:'100%', 
                                borderRadius:16,
                                shadowColor:'white',
                                shadowRadius:1,
                                shadowOffset:{width:-3, height:-3},
                                shadowOpacity:3,
                                alignItems:'center'
                            
                                }}> 
                            <Picker
                                selectedValue={this.state.value}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({...this,value: itemValue})}
                                >
                                <Picker.Item label="RSI" value="RSI" />
                                <Picker.Item label="BBP" value="BBP" />
                                <Picker.Item label="MACD" value="MACD" />
                            </Picker>
                            </View>
                        </View>
                    <View>
                        <ModalAdd/>
                    </View>
                </View>

                
            
            </SafeAreaView>
        )
    }
}

export default StrategyPage
const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      backgroundColor: '#ecf0f1',
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