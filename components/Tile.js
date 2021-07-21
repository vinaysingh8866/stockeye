import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export class Tile extends Component {
    render() {
        return (
            <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.containerIn}>
                </View> 
            </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{ 
        //backgroundColor:'#F2F0F0', 
        marginLeft:'5%', 
        width:150, 
        height:150, 
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
