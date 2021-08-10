import React, { Component, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {PortfolioHeader} from '../components/PortfolioHeader'
import {Tile} from '../components/Tile'
import {TileSmall} from '../components/TileSmall'
import {TabTile} from '../components/TabTile'
import { LineChart } from 'react-native-chart-kit'
const DATA = [
    {
      id: '1',
      title: 'APPL',
    },
    {
      id: '2',
      title: 'GOGL',
    },
    {
      id: '3',
      title: 'TSLA',
    },
  ];

  const DATAa = [
    {
      id: '1',
      title: 'S&P',
    },
    {
      id: '2',
      title: 'BTC',
    },
    {
      id: '3',
      title: 'ETH',
    },
  ];
  
  const smallTile = ({ item }) => (
  
  <TouchableOpacity>
    <View style={{width:150,height:100,backgroundColor:'#F2F0F0',marginLeft:10, marginBottom:10,marginTop:20,borderRadius:16,shadowColor:'black',shadowRadius:1,shadowOffset:{width:3, height:3},shadowOpacity:.1}}>
      <View style={{width:'100%',height:'100%',backgroundColor:'#F2F0F0',borderRadius:16, shadowColor:'white',shadowRadius:1,shadowOffset:{width:-3, height:-3},shadowOpacity:3}}>
        <Text style={{textAlign:'center'}}>{item.title}</Text>
        <LineChart
                    data={{
                    //labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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
                    width={ 100 } // from react-native
                    height={ 70 }
                    withInnerLines={ false }
                    chartConfig={{
                        backgroundColor: '#00FFFF',
                        backgroundGradientFrom: '#F2F0F0',
                        backgroundGradientTo: '#F2F0F0',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: '3%',
                        marginLeft: 10,
                        //paddingLeft:30,
                        paddingRight: -10,
                        //paddingBottom:0,
                        borderRadius: 16
                    }}
                />
      </View>
    </View>
  </TouchableOpacity>
  
  //<TileSmall name={item.title}/>
  );

  const bigTile = ({ item }) => (
  
    <TouchableOpacity>
      <View style={{width:150,height:130,backgroundColor:'#F2F0F0',marginLeft:10, marginBottom:10,marginTop:20,borderRadius:16,shadowColor:'black',shadowRadius:1,shadowOffset:{width:3, height:3},shadowOpacity:.1}}>
        <View style={{width:'100%',height:'100%',backgroundColor:'#F2F0F0',borderRadius:16, shadowColor:'white',shadowRadius:1,shadowOffset:{width:-3, height:-3},shadowOpacity:3}}>
          <Text style={{textAlign:'center'}}>{item.title}</Text>
          <LineChart
                    data={{
                    //labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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
                    width={ 100 } // from react-native
                    height={ 100 }
                    withInnerLines={ false }
                    chartConfig={{
                        backgroundColor: '#00FFFF',
                        backgroundGradientFrom: '#F2F0F0',
                        backgroundGradientTo: '#F2F0F0',
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: '3%',
                        marginLeft: 10,
                        //paddingLeft:30,
                        paddingRight: -10,
                        //paddingBottom:0,
                        borderRadius: 16
                    }}
                />
        </View>
      </View>
    </TouchableOpacity>
    
    //<TileSmall name={item.title}/>
    );

    
    
const HomePage = () => {
    return (
        <SafeAreaView style={{backgroundColor:'#F2F0F0'}}>
                <PortfolioHeader/>
                <Text style={ {padding:20},styles.headingText}>Top Performing</Text>
                <FlatList
                  style={{marginLeft:'3%'}}
                  horizontal
                  //horizontal={true}
                  data={DATAa}
                  renderItem={bigTile}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
                
                <Text style={styles.headingText}>Patterns Detected</Text>
                <Tile/>
                  
                <View>
                <FlatList
                  style={{marginLeft:'3%'}}
                  horizontal
                  //horizontal={true}
                  data={DATA}
                  renderItem={smallTile}
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
