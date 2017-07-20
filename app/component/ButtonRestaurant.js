/* @flow */

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,

} from 'react-native';
import ButtonImage from '../img/button.png';
import ButtonActiveImage from '../img/button_active.png';

export default class ButtonRestaurant extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonActived: false
    }
    this.buttonRestaurant = this.buttonRestaurant.bind(this);
  }
  buttonRestaurant(){
    this.setState({
      buttonActived: true,
    })
    setTimeout(() => {
      this.setState({
        buttonActived: false
      })
      // this.props.onPress();
      this.props.onPress();
    }, 10)
  }
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.buttonRestaurant}>
          {this.state.buttonActived ? <Image source={ButtonActiveImage} /> :   <Image source={ButtonImage} />}
          <View style={styles.buttonContent}>
            <View style={styles.wraperIcon}>
              <Icon style={styles.icon} name={this.props.icon} color="white" size={25} backgroundColor="transparent"></Icon>
            </View>
            <View style={styles.wraperName}>
              <Text style={styles.buttonName}>{this.props.name}</Text>
            </View>

          </View>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  button: {
  },
  wraperIcon:{
    marginLeft: 9,
  },
  icon: {
    alignSelf: 'center',
  },
  buttonContent: {
    position:'absolute',
    top: 25,
    left:18,
  },
  wraperName: {
    // backgroundColor: 'red',
    width: 50,
    marginLeft:5,
  },
  buttonName:{
    fontSize: 11,
    color: 'white',
    alignSelf: 'center',
  },
});
