import React, { Component, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {PortfolioHeader} from '../components/PortfolioHeader'
import {Tile} from '../components/Tile'
import {TileSmall} from '../components/TileSmall'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: ' Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: ' ',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const renderItem = ({ item }) => (
  
  <TouchableOpacity>
    <View style={{width:150,height:100,backgroundColor:'#F2F0F0',marginLeft:10, marginBottom:10,marginTop:20,borderRadius:16,shadowColor:'black',shadowRadius:1,shadowOffset:{width:3, height:3},shadowOpacity:.1}}>
      <View style={{width:'100%',height:'100%',backgroundColor:'#F2F0F0',borderRadius:16, shadowColor:'white',shadowRadius:1,shadowOffset:{width:-3, height:-3},shadowOpacity:3}}>
        <Text style={{textAlign:'center'}}>{item.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
  
  //<TileSmall name={item.title}/>
  );

const HomePage = () => {
    return (
        <SafeAreaView style={{backgroundColor:'#F2F0F0'}}>
                <PortfolioHeader/>
                <Text style={styles.headingText}>Top Performing</Text>
                <Tile/>
                <Text style={styles.headingText}>Patterns Detected</Text>
                <View>
                <FlatList
                  style={{marginLeft:'3%'}}
                  horizontal
                  //horizontal={true}
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
                </View>
            </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    headingText: {marginLeft:'5%', fontSize:20},
})
