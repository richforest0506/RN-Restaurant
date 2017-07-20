/* @flow */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';
import TopicImage from '../img/topicImage.png';
import ButtonPrice from '../img/button_active.png';

const { width, height } = Dimensions.get('window');

export default class Post extends Component {
  constructor(props){
    super(props);
  }
  facebook(){
    console.log("Facebook");
  }
  twitter(){
    console.log("Twitter");

  }
  googlePlus(){
    console.log("Google Plus");

  }
  render() {
    return (
      <View>
          <Header title="Tin tuc gi do thoi" navigation={this.props.navigation} goBack={true}/>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.imageTopicWraper}>
              <Image source={{uri: "http://www.vengauk.co.uk/wp-content/uploads/2013/06/DSC6316-tapas-venga-low-res-website.jpg"}} style={styles.imageTopic} />
              <View style={styles.buttonPriceWrapper}>
                <Image source={ButtonPrice} />
                <Icon style={styles.price} name="shopping-cart"></Icon>
              </View>
            </View>
            <View style={styles.information}>
              <Text style={styles.title}>THE TRIO - SOUP & SALAD</Text>
              <Text style={styles.date}>Tuestday, April 20, 2017</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
              <View style={styles.social}>
                <TouchableOpacity style={styles.socialButton} onPress={this.facebook}>
                  <Icon style={styles.icon} name="facebook" size={15} color="black"></Icon>
                </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton} onPress={this.twitter}>
                  <Icon style={styles.icon} name="twitter" size={15} color="black"></Icon>
                </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton} onPress={this.googlePlus}>
                  <Icon style={styles.icon} name="google-plus" size={15} color="black" ></Icon>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  social: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  socialButton: {
    borderColor: 'black',
    borderWidth: 1,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 100,
    zIndex: 2,
  },
  date:{
    fontSize: 9,
    paddingTop: 10
  },
  icon: {
    zIndex: 1,
  },
  information: {
    padding: 20,
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold'
  },
  description: {
    paddingTop: 10,
    fontSize: 12,
  },
  imageTopic:{
    height: 400,
    resizeMode: 'cover',
    width: width,
  },
  imageTopicWraper:{
    width: width,
    height: 400,
    position: 'relative',
  },
  buttonPriceWrapper:{
    position: 'absolute',
    right: 20,
    bottom: -40,
    zIndex: 2,
  },
  price:{
    position:'absolute',
    left: 13,
    color: 'white',
    top: 38,
    width: 70,
    textAlign: 'center',
    fontSize: 25
  },
});
