import React, { Component, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet,ScrollView , Picker, Button, TouchableOpacity, Modal, TextInput, Alert, FlatList} from 'react-native'
import ModalAdd from '../components/ModalAdd';
import uuid from 'react-native-uuid';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'RSI',
      CC:70,
      DD:'>'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'BBP',
      CC:1,
      DD:'>'
    },
    
  ];
  

  const DATAB = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'RSI',
      CC:30,
      DD:'<'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'BBP',
      CC:0,
      DD:'<'
    },
    
  ];
  const renderItem = ({ item }) => (
  
  <TouchableOpacity>
    <View style={{width:'80%',height:60,backgroundColor:'#F2F0F0', marginBottom:10,marginTop:20,borderRadius:16,shadowColor:'black',shadowRadius:1,shadowOffset:{width:3, height:3},shadowOpacity:.1}}>
      <View style={{flexDirection:'row',flexWrap: "wrap",width:'100%',height:'100%',backgroundColor:'#F2F0F0',borderRadius:16, shadowColor:'white',shadowRadius:1,shadowOffset:{width:-3, height:-3},shadowOpacity:3}}>
        <Text style={{ fontSize:15, marginLeft:'10%',marginTop:20}}>{item.title}</Text>
        <Text style={{ alignSelf: "flex-start", fontSize:15, marginLeft:'30%',marginTop:20}}>{item.DD}{item.CC}</Text>
      </View>
    </View>
  </TouchableOpacity>
  
  //<TileSmall name={item.title}/>
  );


export class StrategyPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: "MACD",
          isModalVisible:false,
          text:"",
          databuy:[],
          datasell:[{id:"1",title:"MACD",CC:1,DD:"<"},{id:"2",title:"MACD",CC:1,DD:"<"},{id:"3",title:"MACD",CC:1,DD:"<"}],
          databuynum:3,
          datasellnum:3
        };
        
      }
    increaseBuy=()=>{
      var number = parseInt(this.state.databuynum , 10 ) + 1;
      const val = number
      this.setState({databuynum:val.toString})
    }
    handleCallback = (buy,value,sign) =>{
      if(buy){
        this.increaseBuy()
        const id = this.state.databuynum
        var joined = this.state.databuy.concat([{id:id,title:this.state.value,CC:value,DD:sign}])
        this.setState({databuy:joined})
        
        this.setState({text:this.state.databuy.toString})
      }   
      else{

      }
    }
    render() {

        const updateData = (val) =>{
            this.setState({text:val})
        }
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
                                onValueChange={(itemValue, itemIndex) => this.setState({value: itemValue})}
                                >
                                <Picker.Item label="RSI" value="RSI" />
                                <Picker.Item label="BBP" value="BBP" />
                                <Picker.Item label="MACD" value="MACD" />
                            </Picker>
                            </View>
                        </View>
                    <View>
                        <ModalAdd parentCallback = {this.handleCallback}/>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginTop:20}}>
                    <Text style={{width:'55%', textAlign:'center', fontSize:27}}>Buy</Text>
                    <Text style={{width:'55%', textAlign:'center', fontSize:27}}>Sell</Text>
                </View>
                

                <View style={{flexDirection:'row', height:'40%'}}>
                  <ScrollView>
                    <FlatList
                    style={{marginLeft:'5%',paddingStart:10}}
                    //horizontal
                    //horizontal={true}
                    data={this.state.databuy}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    />
                  </ScrollView>
                  <ScrollView>
                    <FlatList
                    style={{marginLeft:'5%',paddingStart:10}}
                    //horizontal
                    //horizontal={true}
                    data={this.state.datasell}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    />
                  </ScrollView>
                </View>
                <TouchableOpacity>
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
                                
                                <Text style={{paddingTop:'15%'}}>Test Strategy</Text>

                            </View>
                    </View>
                </TouchableOpacity>
                
            
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