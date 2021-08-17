import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

const DATA = [
    {
      id: '1',
      title: 'MACD',
    },
    {
      id: '2',
      title: 'RSI',
    },
    {
      id: '3',
      title: 'BBP',
    },
  ];
  const bigTile = ({ item }) => (
  
    <TouchableOpacity>
      <View style={{width:'90%',height:150,backgroundColor:'#F2F0F0',marginLeft:10, marginBottom:10,marginTop:20,borderRadius:16,shadowColor:'black',shadowRadius:1,shadowOffset:{width:3, height:3},shadowOpacity:.1}}>
        <View style={{width:'100%',height:'100%',backgroundColor:'#F2F0F0',borderRadius:16, shadowColor:'white',shadowRadius:1,shadowOffset:{width:-3, height:-3},shadowOpacity:3}}>
          <Text style={{textAlign:'center', fontSize:26}}>{item.title}</Text>
          
        </View>
      </View>
    </TouchableOpacity>
    
    //<TileSmall name={item.title}/>
    );
export default class Learning extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={{height:50, width:'100%', alignContent:'center', alignItems:'center', marginTop:20}}>
                    <Text style={{fontSize:40}}>Learning Center</Text>
                </View>
                <FlatList
                  style={{marginLeft:'3%'}}
                  //horizontal
                  //horizontal={true}
                  data={DATA}
                  renderItem={bigTile}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
