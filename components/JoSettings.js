import React, { Component } from 'react';
import { Container, Header, Content, List, Button, ListItem, Text, Left, Body, Right, Title, Icon } from 'native-base';
import { Dimensions, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class JoSettings extends Component {
  render() {
    return (
      <Container>
        <Header style={{height:85}}>
          <Left/>
            <Body>
                <Title style={{paddingBottom:20, paddingTop:40, fontSize:22, fontWeight:'500'}}>Settings</Title>
                <Text style={{ textAlign:'center', width:width, paddingBottom:35}}>Signed in as Happy User</Text>
            </Body>
          <Right />
        </Header>
        
        <Content>
        <List>
            <ListItem onPress={() => this.props.navigation.navigate('JoPeople')}>
              <Left >
                <Icon name="ios-contacts-outline" style={styles.icon}/>
                <Text style={styles.listText}>Edit People</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemDivider>
            </ListItem>   

            <ListItem >
             <Left>
                <Icon name="ios-bulb-outline" style={styles.icon}/>
                <Text>Learn About Jo's Values</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemDivider>
            </ListItem>

            <ListItem>
              <Left>
                <Icon name="ios-book-outline" style={styles.icon}/>
                <Text>Set Goals</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemDivider>
            </ListItem>

            <ListItem>
              <Left>
              <Icon name="ios-alarm-outline" style={styles.icon}/>
                <Text>Configure Reminders</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemDivider>
            </ListItem>

            <ListItem>
              <Left>
              <Icon name="ios-paper-outline" style={styles.icon}/>
                <Text>View Tutorial</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemDivider>
            </ListItem>

            <ListItem>
              <Left>
              <Icon name="ios-paper-plane-outline" style={styles.icon}/>
                <Text>Send Feedback</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemDivider>
            </ListItem>

            <ListItem>
              <Left>
              <Icon name="ios-information-circle-outline" style={styles.icon}/>
                <Text>About Jo</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemDivider>
            </ListItem>

            <ListItem>
              <Left>
              <Icon name="ios-clipboard-outline" style={styles.icon}/>
                <Text>Privacy Policy</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemDivider>
            </ListItem>

            <ListItem>
              <Left>
              <Icon name="ios-exit-outline" style={styles.icon}/>
                <Text>Logout</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            
          </List>
        </Content>
      </Container>
    );
  }
}

export default JoSettings;



const styles = StyleSheet.create({
    icon: {
        fontSize:30, 
        marginRight:10,
        paddingRight: 0
    },
    listText:{
        backgroundColor:'transparent',
        
    }
  
  });

