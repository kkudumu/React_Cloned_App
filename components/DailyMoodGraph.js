import React from 'react';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import { View, StyleSheet, Text } from 'react-native'
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
    
    { quarter: 'Mon', earnings: 0 },
    { quarter: 'Tue', earnings: 1 },
    { quarter: 'Wed', earnings: 2 },
    { quarter: 'Thu', earnings: 3 },
    { quarter: 'Fri', earnings: 4 },
    { quarter: 'Sat', earnings: 5 },
    { quarter: 'Sun', earnings: 0 },
  ];

class DailyMoodGraph extends React.PureComponent {

    render() {

        return (
          
            <View style={styles.container}>
             
              <VictoryChart width={395} 
              domainPadding={25} >
                <VictoryBar animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }} 
              barRatio={1} 
              data={data}  x="quarter" y="earnings" 
              style={{ data: { fill: "green", strokeWidth: 2 }}} />
              </VictoryChart>
              
            </View>
        )
    }

}

export default DailyMoodGraph;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5fcff"
    }
  });