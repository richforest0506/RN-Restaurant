/* @flow */

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import ButtonImage from '../img/button.png';
import ButtonActiveImage from '../img/button_active.png';

export default class ButtonMenu extends Component {
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
              <Icon color="white" style={styles.icon} name={this.props.icon} size={25} backgroundColor="transparent"></Icon>
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
    width: 200
  },
  wraperIcon:{
    width: 50,
    marginTop: 15,
  },
  icon: {
    alignSelf: 'center',
  },
  buttonContent: {
    position:'absolute',
    top: 20,
    left:25,
  },
  wraperName: {
    position: 'absolute',
    top: 30,
    left: 50,
    width: 100
  },
  buttonName:{
    fontSize: 13,
    marginTop: -10,
    color: 'white',
    alignSelf: 'center',
  },
});
