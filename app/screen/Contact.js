  /* @flow */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import BackgroundImage from '../img/background.png';
import ButtonMenu from '../component/ButtonMenu'
import Header from './Header';

const { width, height } = Dimensions.get('window');
export default class Contact extends Component {
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
  render
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header title="Contact" navigation={this.props.navigation} goBack={true}/>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.backgroundImageWraper}>
              <Image source={BackgroundImage} style={styles.backgroundImage}/>
            </View>
            <View style={styles.menu}>
              <View style={styles.mapWrap}>
                <MapView style={styles.map}
                  zoomEnabled={true}
                  initialRegion={{
                    latitude: 12.2493618,
                    longitude: 109.1793883,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  }}
                >
                  <MapView.Marker
                    coordinate={{latitude: 12.250050,
                      longitude: 109.179003}}
                    title={"title"}
                    description={"description"}
                  />
                </MapView>
              </View>
              <View style={styles.information}>
                <Text style={styles.cName}>Address: </Text>
                <Text style={styles.cDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Text>
                <Text style={styles.cName}>Phone: </Text>
                <Text style={styles.cDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Text>
                <View style={styles.social}>
                  <TouchableOpacity style={styles.socialButton} onPress={this.facebook}>
                    <IconF style={styles.icon} name="facebook" size={15} color="white"></IconF>
                  </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} onPress={this.twitter}>
                    <IconF style={styles.icon} name="twitter" size={15} color="white"></IconF>
                  </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} onPress={this.googlePlus}>
                    <IconF style={styles.icon} name="google-plus" size={15} color="white" ></IconF>
                  </TouchableOpacity>
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
  social: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  socialButton: {
    borderColor: 'white',
    borderWidth: 1,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 100,
    zIndex: 2,
  },
  icon: {
    zIndex: 1,
  },
  mapWrap: {
    height: 450,
    width:width,
  },
  map:{
    position: 'absolute',
    top: 0,
    bottom:0,
    left: 0,
    right: 0,
    width: width,
    height: 450
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
  information:{
    padding: 10,
  },
  container: {
    paddingTop: 50,
    minHeight: height,
    paddingBottom: 50,
    alignItems: 'center',
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
    opacity: 0.5
  }
});
