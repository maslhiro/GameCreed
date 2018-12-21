import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Example from './src/screens'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="black"/>
          <Example/>
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
