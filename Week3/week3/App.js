import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';

export default class App extends Component {
  state = {
    isBlack: false,
    username: 'dungdao',
    password: '12345',
  }

  render() {
    return (
      <View style={styles.container}>
        <Header name="Long"/>
        <Text style={{flex: 1, justifyContent: "center"}}>
          <Text>Hello, {this.state.username}</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: "center"},
});
