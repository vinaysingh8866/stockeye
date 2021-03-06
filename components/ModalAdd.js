import React ,{Component,useState}from 'react'
import { View, Text, Modal,TextInput, Button, StyleSheet, Dimensions, TouchableOpacity, RadioButton, Picker } from 'react-native'

const { width } = Dimensions.get("window");

const sendUpdateToparent = (childData) => {
    props.parentCallBack(childData)
}




export class ModalAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalVisible:false,
          text:"",
          checked : "first",
          value: "buy",
          sign:""
        };
      }

    onTrigger = (buy,value,sign) => {
        this.props.parentCallback(buy,value,sign);
    }
    render() {

        const setData = (vvalue) => {
            this.setState({text:vvalue})
            
        };

        const setRadio = (vvalue) => {
            this.setState({chcked:vvalue})
            
        };
        const setVal = (vvalue) => {
            this.setState({sign:vvalue})
            
        };

        const toggleModalVisibility = () => {
            if(this.state.isModalVisible){
                if(this.state.value=='buy'){
                    this.onTrigger(true, this.state.sign,this.state.text)
                }
                else{
                    this.onTrigger(false, this.state.sign,this.state.text)
                }
            }
            else{}
            this.setState({isModalVisible:!this.state.isModalVisible})
        };

        return (
            <View>

            <TouchableOpacity onPress={toggleModalVisibility}>
                            <View style={{ 
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
                            <Text style={{paddingEnd:10, fontSize:30}}> Value </Text>
                            <TextInput style={styles.text} value={this.state.sign} onChangeText={text => setVal(text)} placeholder="70"></TextInput>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{paddingEnd:10, fontSize:30}}>Sign</Text>
                            <TextInput placeholder=" < / > " 
                                    value={this.state.text} onChangeText={text => setData(text)} style={styles.text} 
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
                                <Picker
                                        selectedValue={this.state.value}
                                        style={{ 
                                            backgroundColor: 'pink', 
                                            height:150,
                                            borderRadius:16,
                                            paddingBottom:160,
                                            shadowColor:'white',
                                            shadowRadius:1,
                                            shadowOffset:{width:-3, height:-3},
                                            shadowOpacity:3,
                                            
                                            }}
                                        onValueChange={(itemValue, itemIndex) => this.setState({value: itemValue})}
                                        >
                                        <Picker.Item label="Buy" value="buy" />
                                        <Picker.Item label="Sell" value="sell" />
                                </Picker>
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

export default ModalAdd





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

