import React, { Component } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'
import {LineChart} from 'react-native-chart-kit'
import { Dimensions } from "react-native";

export class PortfolioHeader extends Component {
    static wi = Dimensions.get('window').width;
    render() {

        return (
            <TouchableOpacity>
            <View style={{ 
                //backgroundColor:'#F2F0F0', 
                marginLeft:'5%', 
                paddingTop:10,
                width:'90%', 
                height:200, 
                borderRadius:16,
                shadowColor:'black',
                marginVertical:10,
                shadowRadius:1,
                shadowOffset:{width:3, height:3},
                shadowOpacity:.1}
                }>
            <View style={{ 
                backgroundColor:'#F2F0F0', 
                //marginLeft:'5%', 
                width:'100%', 
                height:'100%', 
                borderRadius:16,
                shadowColor:'white',
                shadowRadius:1,
                shadowOffset:{width:-3, height:-3},
                shadowOpacity:3}
                }>
                <Text style={{textAlign:'center', fontSize:29, fontWeight:'500'}}>Vinay Singh</Text>
                <Text style={{textAlign:'center', marginVertical:'4%',fontSize:20}}>$11235813</Text>
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
                    width={ Dimensions.get('window').width * 0.80 } // from react-native
                    height={ Dimensions.get('window').width * 0.20 }
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
                        marginLeft: Dimensions.get('window').width * 0.1,
                        //paddingLeft:30,
                        paddingRight: 0,
                        //paddingBottom:0,
                        borderRadius: 16
                    }}
                />
            </View>
            </View>
            </TouchableOpacity>
        )
        
    }
}

export default PortfolioHeader
