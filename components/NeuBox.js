import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NeuBox = (props) => {
    return (
        <TouchableOpacity>
            <View style={{ 
                //backgroundColor:'#F2F0F0', 
                marginLeft:'5%', 
                width:props.width, 
                height:props.height, 
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
            </View>
        </TouchableOpacity>
    )
}

export default NeuBox

const styles = StyleSheet.create({})
