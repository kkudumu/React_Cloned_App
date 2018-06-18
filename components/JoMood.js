import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, List, ListItem, Text  } from 'native-base';
import { StyleSheet } from 'react-native';

class JoMood extends Component {
  render() {
    return (
      <Container>
        <Header>
        <Title style={{paddingTop:20, fontSize:25, fontWeight:'400'}}>From Jo</Title>
        </Header>
        <Content>
          <List>
            <ListItem>
            <Body>
                <Text style={styles.dateText}>Friday, June 15, 2018 </Text>
                <Text style={styles.moodText}>Mood rating: 5</Text>
            </Body>
            </ListItem>
            <ListItem>
            <Body>
                <Text style={styles.dateText}>Friday, June 14, 2018 </Text>
                <Text style={styles.moodText}>Mood rating: 4</Text>
            </Body>
            </ListItem>
            <ListItem>
            <Body>
                <Text style={styles.dateText}>Friday, June 13, 2018 </Text>
                <Text style={styles.moodText}>Mood rating: 3</Text>
            </Body>
            </ListItem>
      
      
          </List>
        </Content>
      </Container>
    );
  }
}

export default JoMood;

const styles = StyleSheet.create({
    dateText: {
        color:'#0eb292',
    
    },
    moodText:{
        paddingTop:10
    }
    


  });
  