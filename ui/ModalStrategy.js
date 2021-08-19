import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Modal,Dimensions, StyleSheet } from 'react-native'
import {LineChart} from 'react-native-chart-kit'


const { width } = Dimensions.get("window");

export class ModalStrategy extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isStrategyVisible:false,
          
          
        };
        
      }
    render() {
        const togglemModalVisibility = () => {
            console.log("okok")
            this.setState({isStrategyVisible:!this.state.isStrategyVisible})
        };


        return (
            <View>
            <TouchableOpacity onPress={togglemModalVisibility}>
                    <View style={{ 
                                marginStart:'30%',
                                marginTop:20,
                                width:150,
                                height:70,
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
                                <Text style={{paddingTop:'15%',elevation:3}}>Test Strategy</Text>
                            </View>
                    </View>
            </TouchableOpacity>
            <Modal animationType="slide" 
            transparent visible={this.state.isStrategyVisible} 
            presentationStyle="overFullScreen" 
            onDismiss={togglemModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>

                <LineChart
                        data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [{
                            data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                            ]
                        }]
                        }}
                        width={ Dimensions.get('window').width * 0.60 } // from react-native
                        height={100}
                        withInnerLines={false}
                        chartConfig={{
                        backgroundColor: "rgba(200, 0, 0, 0)",
                        backgroundGradientFrom: "rgba(255, 255, 255, 0)",
                        backgroundGradientTo: "rgba(0, 0, 0, 0)",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 0,
                        marginLeft:39/2,
                        paddingRight: 0,
                        borderRadius: 16
                        }}
                    />

                        <TouchableOpacity onPress={togglemModalVisibility}>
                            <Text>Close</Text>
                        </TouchableOpacity>


                </View>
                </View>
                </Modal>
            </View>

        )
    }
}

export default ModalStrategy


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: 400,
        width: width * 0.8,
        backgroundColor: "#F2F0F0",
        borderRadius: 7,
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
        fontSize:20,
        height:39
    },
});