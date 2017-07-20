/* @flow */
import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import BackgroundImage from '../img/background.png';
import ButtonMenu from '../component/ButtonMenu'
import Header from './Header';

const { width, height } = Dimensions.get('window');
export default class Booking extends Component {
  constructor(props){
    super(props)
    this.category = this.category.bind(this);
  }
  category(category){
    this.props.navigation.navigate("Category", {category: category});
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header title="Booking" navigation={this.props.navigation} goBack={true}/>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.backgroundImageWraper}>
              <Image source={BackgroundImage} style={styles.backgroundImage}/>
            </View>
            <View style={styles.menu}>
              <View style={styles.locations}>
                <View style={styles.nameWrapper}>
                  <Text style={styles.name}>Restaurant</Text>
                </View>
                <Text style={styles.cName}>Address: </Text>
                <Text style={styles.cDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Text>
                <Text style={styles.cName}>Phone: </Text>
                <Text style={styles.cDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Text>
              </View>
              <View style={styles.locations}>
                <View style={styles.nameWrapper}>
                  <Text style={styles.name}>Cafe</Text>
                </View>
                <Text style={styles.cName}>Address: </Text>
                <Text style={styles.cDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Text>
                <Text style={styles.cName}>Phone: </Text>
                <Text style={styles.cDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Text>
              </View>
              <View style={styles.locations}>
                <View style={styles.nameWrapper}>
                  <Text style={styles.name}>Pub</Text>
                </View>
                <Text style={styles.cName}>Address: </Text>
                <Text style={styles.cDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Text>
                <Text style={styles.cName}>Phone: </Text>
                <Text style={styles.cDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Text>
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
    minHeight: height,
    paddingBottom: 50,
    alignItems: 'center',
    paddingTop: 50
  },
  locations:{
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 15

  },
  nameWrapper: {
    backgroundColor: '#FD9100',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 5
  },
  name:{
    fontWeight: 'bold',
    color:'white'
  },
  cName: {
    paddingLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10
  },
  cDescription: {
    paddingLeft: 10,
    fontSize: 13,
    color: 'white',
    fontStyle: 'italic'
  },
  menu:{
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
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
    opacity: 0.1
  }
});
