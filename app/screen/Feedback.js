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
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import BackgroundImage from '../img/background.png';
import ButtonMenu from '../component/ButtonMenu'
import Header from './Header';

const { width, height } = Dimensions.get('window');
export default class Feedback extends Component {
  constructor(props){
    super(props)
    this.category = this.category.bind(this);
  }
  category(category){
    this.props.navigation.navigate("Category", {category: category});
  }
  console(){
    console.log("PHAM CONG SON IT");
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header title="Feedback" navigation={this.props.navigation} goBack={true} otherIcon="ios-paper-plane-outline" otherIconPress={this.console} />
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.backgroundImageWraper}>
              <Image source={BackgroundImage} style={styles.backgroundImage}/>
            </View>
            <View style={styles.menu}>
              <View style={styles.box}>
                <View style={styles.box1}>
                  <Text style={styles.nameInput}>Your Name</Text>
                </View>
                <View style={styles.box2}>
                  <TextInput style={styles.textInput} placeholder="Pham Cong Son" placeholderTextColor="#b5b4b4" underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.box}>
                <View style={styles.box1}>
                  <Text style={styles.nameInput}>Email</Text>
                </View>
                <View style={styles.box2}>
                  <TextInput style={styles.textInput} placeholder="phamcongsonit@gmail.com" placeholderTextColor="#b5b4b4" underlineColorAndroid='transparent' />
                </View>
              </View>
              <View style={styles.box}>
                <View style={styles.box1}>
                  <Text style={styles.nameInput}>Message</Text>
                </View>
                <View style={styles.box2}>
                  <TextInput style={[styles.textInput, styles.textArea]} multiline={true} placeholder="Hello Pham Cong Son" placeholderTextColor="#b5b4b4" underlineColorAndroid='transparent' />
                </View>
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
  nameInput: {
    marginTop: 5,
    fontSize: 15,
    color: 'white'
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 0,
    height: 35,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textArea:{
    height: 300,
    textAlignVertical: 'top'
  },
  box:{
    padding: 10,
    flexDirection: 'row'
  },
  box1:{
    flex: 1,
  },
  box2: {
    flex: 3,
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
