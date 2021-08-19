import React, { Component } from 'react'
import { View, Text, Modal,TextInput, Button, StyleSheet, Dimensions, TouchableOpacity, RadioButton, Picker } from 'react-native'
const { width } = Dimensions.get("window");

export class ModalPortfolio extends Component {
    constructor(props)
    {
        super(props);
        this.state =
        {
            isModelVisible:false,
            text:"",
            value:"buy",
            amount:""
        };
    }

    onTrigger = (stockName,amount) =>
    {
        this.props.parentCallback(stockName,amount);
    }
    render()
    {
        const setData = (vvalue) => 
        {
        this.setState({text:vvalue})
        };

        
        const setVal = (vvalue) =>
        {
            this.setState({amount:vvalue})
        };


        const toggleModalVisibility = () => {
            if(this.state.isModalVisible){
                
                    this.onTrigger(this.state.text,this.state.amount)
                
            }
            else{

            }
            this.setState({isModalVisible:!this.state.isModalVisible})
        };

        return(
            <View>

                <TouchableOpacity onPress = {toggleModalVisibility}>
                    <View style = {{
                    width:100,
                    height:60,
                    marginStart:60,
                    marginTop:40,
                    padding:4,
                    width:90,
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
                                    <Text style={{paddingTop:15}}>ADD</Text>
                                </View>

                    </View>
                    
                    </TouchableOpacity>

                    <Modal animationType="slide" 
                   transparent visible={this.state.isModalVisible} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                        <View style={{flexDirection:'row'}}>
                            
                            <Text style={{paddingEnd:10, fontSize:30}}>Stocks Name</Text>

                            <TextInput placeholder=" < / > " 
                                    value={this.state.text} onChangeText={text => setData(text)} style={styles.text} 
                                        />
                        
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <Text style={{paddingEnd:10, fontSize:30}}>Amount</Text>
                            <TextInput placeholder=" < / > " 
                                    value={this.state.amount} onChangeText={text => setVal(text)} style={styles.text} 
                                        />
                        </View>



                        <View style={{ 
                                width:100,
                                height:160,
                                padding:4,
                                marginTop:50,
                                borderRadius:16,
                                shadowColor:'black',
                                shadowRadius:1,
                                shadowOffset:{width:3, height:3},
                                shadowOpacity:.1}

                                }> 

           </View>

           <View style={{ 
                                width:100,
                                height:60,
                                
                                marginTop:40,
                                padding:4,
                                width:90,
                                borderRadius:16,
                                shadowColor:'black',
                                shadowRadius:1,
                                shadowOffset:{width:3, height:3},
                                shadowOpacity:.1}}>
                                    <View style={{ 
                                    backgroundColor: '#F2F0F0', 
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
                        <Button title="Add" style={{padding:50}} onPress={toggleModalVisibility} />
                        </View>
                        </View>
                    </View>
                         
                    
                    </View>
                
            </Modal>
            </View>
        )
    }
}

export default ModalPortfolio


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








