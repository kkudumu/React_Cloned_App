import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import {Header, Item, Icon, Input, Button, Title} from 'native-base';




export class Search extends React.Component {

    render() {
      return (
              <View>
                {/* <Header
                    style={{backgroundColor: 'transparent'}}
                    searchBar
                    rounded
                >
                 <Item>
                        <Icon name="ios-search"/>
                        <Input
                        placeholder="Search"
                        />
                    </Item>

                </Header> */}
                <SearchBar
                containerStyle={{backgroundColor:'#f6f6f6', overflow:'hidden', borderTopWidth:0, borderBottomWidth:0}}
                round
                lightTheme
                placeholder="Search Entries"
                />
            </View>
      );
    }
  }
  export default Search;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });




