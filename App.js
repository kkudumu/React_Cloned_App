import React from 'react';
import {  AppRegistry, FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import {Header, Item, Icon, Input, Button, Title} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from './components/Search';
import TimelineHeader from './components/TimelineHeader';
import TimelineTable from './components/TimelineTable'

// import FontAwesome, { Icons } from 'react-native-fontawesome';

var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

export class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}


export class Timeline extends React.Component {
  render() {
    return (

      <View style={{flexDirection:'column'}}>
        <View>
          <TimelineHeader/>
        </View>
        <View style={{position:'absolute', top:80, right:0, left:0}} >
          <Search/>
        </View>
        <View style={{position:'absolute', top:125,right:0, left:0}}> 
        <TimelineTable/>
        </View>
        

      </View> 
    );
  }
}

export class FromJo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>From Jo</Text>
      </View>
    );
  }
}

export class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Dashboard: { screen: Dashboard, navigationOptions: {
    tabBarLabel: 'Dashboard',
    tabBarIcon : ({tintColor}) => (
      <Icon name="ios-speedometer-outline" color={tintColor} size={40} />
    )
  } 
},
  Timeline: { screen: Timeline, navigationOptions: {
    tabBarLabel: 'Timeline',
    tabBarIcon: ({tintColor}) => (
      <Icon name="md-calendar" color={tintColor} size={40}/>
    )
  } 
},

  FromJo: { screen: FromJo, navigationOptions: {
    tabBarLabel: 'FromJo',
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-chatbubbles-outline" color={tintColor} size={40}/>
    )
  }  
},
  Settings: { screen: Settings, navigationOptions: {
    tabBarLabel: 'Settings',
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-settings" size={40} color={tintColor} />
      )
    } 
  }
},{//router config
  initialRouteName: 'Dashboard',
  // order:['Settings', 'Dashboard']
//navigation for complete tab nav
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions:{
    activeTintColor:'blue',
    inactiveTintColor:'grey'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
