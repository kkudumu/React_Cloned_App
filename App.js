import React from 'react';
import {  AppRegistry, FlatList, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import {Header, Item, Icon, Input, Button, Title} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from './components/Search';
import TimelineHeader from './components/TimelineHeader';
import TimelineTable from './components/TimelineTable'
import JoMood from './components/JoMood';
import JoSettings from './components/JoSettings';
import DashboardHeader from './components/DashboardHeader';
import WeeklyGoals from './components/WeeklyGoals';
import DailyMood from './components/DailyMood';
import DailyMoodGraph from './components/DailyMoodGraph';
import MoodText from './components/MoodText';
import EntriesText from './components/EntriesText';
import ShareSummary from './components/ShareSummary';
import { VictoryContainer} from 'victory-native';
import FamousQuote from './components/FamousQuote';
import { Font, AppLoading } from 'expo';



var { height } = Dimensions.get('window');
var { width } = Dimensions.get('window');


export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: true });
  }


  render() {
    if (!this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      
      <ScrollView>
      <View style={{width: width, height: height, flex:1}}>
      
      <View style={{flexDirection:'column'}}>
      <DashboardHeader/>
      <View style={{position:'absolute', top:80, right:0, left:0}} >
      <WeeklyGoals/>
      </View>
      <View style={{position:'absolute', top:315}}>
      <DailyMood/>
      </View>
      <View style={{position:'relative', top:345}}>
      <View style={{position:'relative', top:20}}>
      <MoodText/>
      </View>
      <DailyMoodGraph/>
      <View style={{position:'relative', top:300}}>
      <EntriesText/>
      <FamousQuote/>
      <ShareSummary/>
      </View>
    
      </View> 
      
      </View>
      </View>
      </ScrollView>
      
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
      <View style={{flex:1}}>
        <JoMood/>
      </View>
    );
  }
}

export class Settings extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <JoSettings/>
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
    tabBarLabel: 'From Jo',
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
  initialRouteName: 'Timeline',
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
