import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { LineChart } from 'react-native-chart-kit'


export class SmallTileGraph extends Components {
    constructor(props){
    super(props);
    this.state = {

        isModelVisible:false,
        text:"graph"


    };
}

render()
{
    const toggleModalVisibility = () =>
    {
        this.setState({isModelVisible:!this.state.isModelVisible})
    };

    return(
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
                <Model animationType = "view"
                    transparent visible={this.state.isModalVisible}
                    presentationStyle="overFullScreen" 
                    onDismiss={toggleModalVisibility}>


<View style={{width:150,height:100,backgroundColor:'#F2F0F0',marginLeft:10, marginBottom:10,marginTop:20,borderRadius:16,shadowColor:'black',shadowRadius:1,shadowOffset:{width:3, height:3},shadowOpacity:.1}}>
      <View style={{width:'100%',height:'100%',backgroundColor:'#F2F0F0',borderRadius:16, shadowColor:'white',shadowRadius:1,shadowOffset:{width:-3, height:-3},shadowOpacity:3}}>
        <Text style={{textAlign:'center'}}>{this.props.name}</Text>
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


                    </Model>
      
      
        </View>

       )

}

}