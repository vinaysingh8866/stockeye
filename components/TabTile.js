import React from 'react'
import { View, Text } from 'react-native'

const TabTile = () => {
    return (
        <View style={{ 
            //backgroundColor:'#F2F0F0', 
            marginLeft:'5%', 
            paddingTop:10,
            width:40, 
            height:10, 
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
    )
}

export default TabTile
