import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,FlatList } from 'react-native'


const DATATAB = [
    {
      id: '1',
      title: 'MACD',
      selected:false
    },
    {
      id: '2',
      title: 'Seasonal',
      selected:true
    },
    {
      id: '3',
      title: 'Strategies',
      selected:false
    },
  ];

const TileTab = ({ item }) => (
    <TouchableOpacity>
                    <View style={{ 
                            paddingStart:10,
                            padding:4,
                            width:90,
                            borderRadius:16,
                            shadowColor:'black',
                            shadowRadius:1,
                            shadowOffset:{width:3, height:3},
                            shadowOpacity:.1}

                            }>

                        <View style={{ 
                            backgroundColor: item.selected?'pink':'#F2F0F0', 
                            //marginLeft:'5%', 
                            width:'100%', 
                            height:'100%', 
                            borderRadius:16,
                            shadowColor:'white',
                            shadowRadius:1,
                            shadowOffset:{width:-3, height:-3},
                            shadowOpacity:3,
                            }
                            
                            
                            }> 
                                <Text style={{textAlign:'center', alignSelf:'center', padding:6}}> {item.title} </Text>
                         </View>
                    </View> 
        
    </TouchableOpacity>
    
    
    );


export class Tile extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.containerIn}>
                    <FlatList
                    //style={{marginLeft:'3%'}}
                    horizontal
                    //horizontal={true}
                    scrollEnabled={false}
                    data={DATATAB}
                    renderItem={TileTab}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    />
                        
                </View> 
            </View>
        )
    }
}

    

    

const styles = StyleSheet.create({
    container:{ 
        //backgroundColor:'#F2F0F0', 
        marginLeft:'5%', 
        width:'90%', 
        height:40, 
        borderRadius:16,
        shadowColor:'black',
        marginVertical:10,
        shadowRadius:1,
        shadowOffset:{width:3, height:3},
        shadowOpacity:.1},
    containerIn:{ 
        backgroundColor:'#F2F0F0', 
        //marginLeft:'5%', 
        width:'100%', 
        height:'100%', 
        borderRadius:16,
        shadowColor:'white',
        shadowRadius:1,
        shadowOffset:{width:-3, height:-3},
        shadowOpacity:3}

})
export default Tile
