import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const DATA = [
    {
      id: '1',
      title: 'MACD',
      disc:'Moving average convergence divergence (MACD) is a trend-following momentum indicator that shows the relationship between two moving averages of a security’s price. The MACD is calculated by subtracting the 26-period exponential moving average (EMA) from the 12-period EMA.'
    },
    {
      id: '2',
      title: 'RSI',
      disc:'The Stochastic RSI (StochRSI) is an indicator used in technical analysis that ranges between zero and one (or zero and 100 on some charting platforms) and is created by applying the Stochastic oscillator formula to a set of relative strength index (RSI) values rather than to standard price data. Using RSI values within the Stochastic formula gives traders an idea of whether the current RSI value is overbought or oversold.'
    },
    {
      id: '3',
      title: 'BBP',
      disc:"Bollinger Band Percent (BB %B) quantifies a symbol's price relative to the upper and lower Bollinger Band. There are six basic relationship levels: %B equals 1 when price is at the upper band. %B equals 0 when price is at the lower band."
    },
    {
      id: '4',
      title: 'MFI',
      disc:"The Money Flow Index (MFI) is a technical oscillator that uses price and volume data for identifying overbought or oversold signals in an asset. It can also be used to spot divergences which warn of a trend change in price. The oscillator moves between 0 and 100"
    },
  ];
  const bigTile = ({ item }) => (
    <TouchableOpacity>
      <View style={{width:'90%',height:200,backgroundColor:'#F2F0F0',marginLeft:10, marginBottom:10,marginTop:20,borderRadius:16,shadowColor:'black',shadowRadius:1,shadowOffset:{width:3, height:3},shadowOpacity:.1}}>
        <View style={{width:'100%',height:'100%',backgroundColor:'#F2F0F0',borderRadius:16, shadowColor:'white',shadowRadius:1,shadowOffset:{width:-3, height:-3},shadowOpacity:3}}>
          <Text style={{textAlign:'center', fontSize:26}}>{item.title}</Text>
          <Text style={{padding:10}}> {item.disc} </Text>
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
                  contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }}
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
