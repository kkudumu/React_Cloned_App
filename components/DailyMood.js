import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import { View } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';

class DailyMood extends Component {
  render() {
    return (
      <Container style={{flexDirection:'row'}}>
                
                <Text style={{position:'relative', left:7}}>Period:</Text>
                <Button success style={{marginHorizontal:40, height: 35}}>
                    <Text>7 Days </Text>
                </Button>
                <Button success style={{height:35 }}>
                    <Text >30 Days </Text>
                </Button>
                     
      </Container>
      
     
    );
  }
}

export default DailyMood;