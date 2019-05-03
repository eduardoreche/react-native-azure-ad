import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RestrictScreen extends Component {
  static navigationOptions = {
    title: 'Restrict Screen'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Very restrict screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

export default RestrictScreen;
