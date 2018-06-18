import React, { Component } from 'react';
import { Container, Header, Button, Content, List, ListItem, Thumbnail, Text, Body, StyleSheet } from 'native-base';
import { View, Dimensions } from 'react-native';

var { width } = Dimensions.get('window');

class ShareSummary extends Component {
    render() {
      return (
        <View style={{paddingTop:20}}>
            <Button block info style={{ width:width-50, alignSelf:'center'}}>
                <Text>Share Summary</Text>
            </Button>

        </View>
      );
    }
  }
  
  export default ShareSummary;