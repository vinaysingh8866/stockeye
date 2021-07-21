import React, { Component } from 'react'
import {LineChart} from 'react-native-chart-kit'
import {Text, StyleSheet, View} from 'react-native';
import { Dimensions } from "react-native";
export class LineCartBar extends Component {
  
    static wi = Dimensions.get('window').width*0.10;
    render() {
        return (
            <View>
          <Text>
            Bezier Line Chart
          </Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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
            width={ Dimensions.get('window').width * 0.60 } // from react-native
            height={100}
            withInnerLines={false}
            chartConfig={{
              backgroundColor: "rgba(200, 0, 0, 0)",
              backgroundGradientFrom: "rgba(255, 255, 255, 0)",
              backgroundGradientTo: "rgba(0, 0, 0, 0)",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={{
              marginVertical: 0,
              marginLeft:39/2,
              paddingRight: 0,
              borderRadius: 16
            }}
          />
        </View>
        )
    }
}

export default LineCartBar
