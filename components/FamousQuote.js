import React, { Component } from 'react';
import { Container, Header, Text, Left, Body, Right, Title } from 'native-base';
import { View } from 'react-native';



class FamousQuote extends Component {
  render() {
    return (
            <View style={{paddingTop:20, paddingRight:30}}>
          <Text style={{position:'relative', left:8, textAlign:'center'}}> "Doing what you like is freedom. Liking what you do is happiness." ~Frank Tyger</Text>
          </View>
    );
  }
}

export default FamousQuote;


