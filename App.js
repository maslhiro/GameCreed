import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import RootStack from './src/config'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="black"/>
          <RootStack/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },

});
