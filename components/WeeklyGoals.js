import React, { Component } from 'react';
import { ProgressCircle }  from 'react-native-svg-charts';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Container, Header, Button, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";


var { width } = Dimensions.get('window');
var { height } = Dimensions.get('window');

class WeeklyGoals extends React.PureComponent {

    render() {

        return (
            <View style={{ height:height, width:width}}>
                    <Grid style={{paddingTop:10}}>
                    <Col> 
                    <Text style={{fontWeight:'normal', paddingBottom:20}}>Weekly Goals</Text>                   
                    <ProgressCircle

                        style={styles.circle}
                        progress={ 0.7 }
                        progressColor={'green'}
                    />
                    <Text style={{marginTop:10,  textAlign:'center'}}>Socializing</Text>
                    </Col>
                    
                    <Col>   
                    <Text style={{fontWeight:'normal', paddingBottom:17}}>&nbsp;</Text>                   
                    <ProgressCircle
                        style={styles.circle}
                        progress={ 0.7 }
                        progressColor={'green'}
                    />
                    <Text style={{marginTop:10, textAlign:'center'}}>Physical Well-being</Text>
                    </Col>
                    <Col>
                    <Text style={{fontWeight:'normal', paddingBottom:17}}>&nbsp;</Text>  
                        <ProgressCircle
                        style={styles.circle}
                        progress={ 0.7 }
                        progressColor={'green'}
                    />
                    <Text style={{ marginTop:10, textAlign:'center'}}>Gratitude</Text>
                    </Col>
                </Grid>
                
                

                   
          
            </View>
        )
    }

}

export default WeeklyGoals;


const styles = StyleSheet.create({
    circle: {
        height:100,
        
    },
    list: {
        flex:1, 
        flexDirection:'row', 
        flexWrap:'wrap', 
  
    }
  
  });
  