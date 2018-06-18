import React, { Component } from 'react';
import { Container, Header, Button, Content, List, ListItem, Thumbnail, Text, Body, StyleSheet } from 'native-base';
import { View } from 'react-native';


export class TimelineTable extends Component {
    render() {
        return (
          <Container>
            <Content>
              <List>
                <ListItem>
                  <Body>
                    <Text style={{ color:'#0eb292'}}>Friday, June 15, 2018</Text>
                    
                    <Text style={{paddingTop:10, paddingBottom:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                   
                    <Button
                    style={{width:100, height:20, justifyContent:'center', alignItems:'center'}} 
                    rounded
                    small
                    >
                      <Text style={{fontSize:15, paddingLeft:8, paddingBottom:18}}>Mindfulness</Text>
                    </Button>

                    <Button
                    style={{marginBottom: 5,
                    width:217, height:20, position:'absolute', right:25, right:10, bottom:20}} 
                    rounded
                    small
                    >
                      <Text style={{fontSize:15, paddingLeft:8,paddingBottom:18}}>Important Accomplishments</Text>
                    </Button>

                    <View style={{marginTop:5}}>
                    <Button
                    style={{width:60, height:20}} 
                    rounded
                    small
                    >
                      <Text style={{fontSize:15, paddingLeft:8, paddingBottom:18}}>Goals</Text>
                    </Button>
                   </View>

                  </Body>
                </ListItem>
              </List>
            </Content>
          </Container>
        );
      }
}

export default TimelineTable;


