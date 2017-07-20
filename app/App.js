/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import Header from './screen/Header';
import Route from './Route';

export default class App extends Component {
  render() {
    return (
        <View style={styles.wraper}>
          <StatusBar hidden={true} />
          <Route />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  wraper: {
    flex: 1,
  }
})
