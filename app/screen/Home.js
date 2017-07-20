/* @flow */
import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar
} from 'react-native';
import BackgroundImage from '../img/background.png';
import LogoImage from '../img/logo.png';
import Header from './Header';
import ButtonRestaurant from '../component/ButtonRestaurant';
const { width, height } = Dimensions.get('window');



export default class Home extends Component {
  constructor(props){
    super(props)
    this.menu = this.menu.bind(this);
    this.new = this.new.bind(this);
    this.wine = this.wine.bind(this);
    this.feedback = this.feedback.bind(this);
    this.booking = this.booking.bind(this);
    this.contact = this.contact.bind(this);
  }
  menu(){
    this.props.navigation.navigate("Menu");
  }
  new(){
    this.props.navigation.navigate("NewCategory");
  }
  wine(){
    this.props.navigation.navigate("WineCategory");
  }
  feedback(){
    this.props.navigation.navigate("Feedback");
  }
  booking(){
    this.props.navigation.navigate("Booking");
  }
  contact(){
    this.props.navigation.navigate("Contact");
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Header title="Home" navigation={this.props.navigation} goBack={false}/> */}
        <View style={styles.container}>
          <View style={styles.backgroundImageWraper}>
            <Image source={BackgroundImage} style={styles.backgroundImage}/>
          </View>
          <View style={styles.logoArea}>
            <Image source={LogoImage} style={styles.logo}/>
          </View>
          <View style={[styles.buttonArea, styles.buttonAreaFirst]}>
            <ButtonRestaurant icon="ios-restaurant" name="Menu" onPress={this.menu} navigation={this.props.navigation}/>
            <ButtonRestaurant icon="ios-stats" name="New" onPress={this.new} navigation={this.props.navigation}/>
            <ButtonRestaurant icon="ios-play" name="Wine" onPress={this.wine} navigation={this.props.navigation}/>
          {/* </View>
          <View style={[styles.buttonArea]}> */}
            <ButtonRestaurant icon="ios-paper" name="Feedback" onPress={this.feedback} navigation={this.props.navigation}/>
            <ButtonRestaurant icon="ios-book" name="Booking" onPress={this.booking} navigation={this.props.navigation}/>
            <ButtonRestaurant icon="ios-pin" name="Contact" onPress={this.contact} navigation={this.props.navigation}/>
          </View>
          <Text style={styles.developer}>Developer by Pham Cong Son</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    minHeight: height,
    paddingBottom: 50
  },
  logoArea:{
  },
  buttonArea:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  logo:{
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 300
  },
  backgroundImageWraper:{
    flex: 1,
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor: '#27293E'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: null,
    width: null,
    opacity: 0.3
  },
  developer: {
    position: 'absolute',
    bottom:20,
    left:0,
    right:0,
    color: 'white',
    textAlign: 'center'
  }
});
