/* @flow */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BackgroundImage from '../img/headerBackground.png';
const { width, height } = Dimensions.get('window');

export default class Header extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack(){
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundOpacity}>
        </View>
        <View style={styles.header}>
          {this.props.goBack ?
          <TouchableOpacity style={styles.back} onPress={this.goBack}>
            <Icon style={styles.icon} color="white"  name="ios-arrow-dropleft" size={30} backgroundColor="transparent"></Icon>
          </TouchableOpacity> : <Text></Text>}
          <Text style={styles.title}>{this.props.title}</Text>


          {this.props.otherIcon != null ? <TouchableOpacity style={styles.otherIcon} onPress={this.props.otherIconPress}>
            <Icon style={styles.icon} color="white" name={this.props.otherIcon} size={30} backgroundColor="transparent"></Icon>
          </TouchableOpacity> : null}

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left:0,
    right:0,
    height: 50,
    zIndex: 11,
  },
  header: {
    width: width,
    justifyContent: 'center'
  },
  back:{
    position: 'absolute',
    top: 2,
    left: 2,
    padding: 10,
  },
  otherIcon:{
    position: 'absolute',
    top: 2,
    right: 2,
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    marginTop:10
  },
  backgroundOpacity:{
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#27293E',
    opacity: 0.9
  },
});
