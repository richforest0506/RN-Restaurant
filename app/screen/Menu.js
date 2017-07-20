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
export default class Menu extends Component {
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
        <Header title="Menu" navigation={this.props.navigation} goBack={true}/>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.backgroundImageWraper}>
              <Image source={BackgroundImage} style={styles.backgroundImage}/>
            </View>
            <View style={styles.menu}>
              <ButtonMenu icon="ios-pizza-outline" onPress={() => this.category("Pizza")} name="Pizza" navigation={this.props.navigation}/>
              <ButtonMenu icon="ios-rose-outline" onPress={() => this.category("Tapas")} name="Tapas" navigation={this.props.navigation}/>
              <ButtonMenu icon="ios-nutrition-outline" onPress={() => this.category("Diet")} name="Diet" navigation={this.props.navigation}/>
              <ButtonMenu icon="ios-flame-outline" onPress={() => this.category("Fried")} name="Fried" navigation={this.props.navigation}/>
              <ButtonMenu icon="ios-cafe-outline" onPress={() => this.category("Cafe")} name="Cafe" navigation={this.props.navigation}/>
              <ButtonMenu icon="ios-ice-cream-outline" onPress={() => this.category("Cream")} name="Ice Cream" navigation={this.props.navigation}/>
              {/* <Button title="Move" onPress={this.move} /> */}
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
