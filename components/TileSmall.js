import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class TileSmall extends Component {
    render() {
        return (
            <View style={{ 
                //backgroundColor:'#F2F0F0', 
                marginLeft:'5%', 
                width:20, 
                height:70, 
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
                </View>
                    <Text>{this.props.name}</Text>
            </View>
        )
    }
}

export default TileSmall
