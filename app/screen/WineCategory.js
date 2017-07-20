/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Header from './Header';
import NewImage from '../img/topicImage.png';
import ButtonPrice from '../img/button_active.png';
const {width, height} = Dimensions.get('window');


export default class WineCategory extends Component {
  constructor(props){
    super(props);
    this.state = {
      refreshing: false,
      news: [
        {id: 0, title: 'Wine Bottle 0', date: 'Red Wine / 2005', description: 'Lorem ipsum, sed do eiusmod tempor.', image: "https://static1.squarespace.com/static/57639f02d2b8578a71efcb8a/577b0fbf414fb50acf4c71fc/577b0fc0b8a79bc24ecd753f/1467682754660/menagerie-charms-pourer-assortment-500x500px.png"},
        {id: 1, title: 'Wine Bottle 1', date: 'Red Wine / 2005', description: 'Lorem ipsum, sed do eiusmod tempor.', image: "https://www.hertzpageo.com/img/blog/delicious-drives/Italy/Day1/DAY%201%20ITALY%20MOBILE%20BANNER%205%20500x500px.jpg"},
        {id: 2, title: 'Wine Bottle 2', date: 'Red Wine / 2005', description: 'Lorem ipsum, sed do eiusmod tempor.', image: "http://www.gourmet-japan.com/2013/images/villa-maria_500x500px.jpg"},
        {id: 3, title: 'Wine Bottle 3', date: 'Red Wine / 2005', description: 'Lorem ipsum, sed do eiusmod tempor.', image: "https://static1.squarespace.com/static/57639f02d2b8578a71efcb8a/577b0fbf414fb50acf4c71fc/577b0fc16b8f5b92c34393ec/1467682754416/menagerie-charms-swordfish-500x500px.png"},
        {id: 4, title: 'Wine Bottle 4', date: 'Red Wine / 2005', description: 'Lorem ipsum, sed do eiusmod tempor.', image: "https://static1.squarespace.com/static/57639f02d2b8578a71efcb8a/5776cb95cd0f68ca008e18e7/5776cb97cd0f68ca008e1912/1467403161470/casafina-deer-friends-glass-500x500px.png"}
      ]
    }
    this.renderFooter = this.renderFooter.bind(this);
    this.refresh = this.refresh.bind(this);
    this.wine = this.wine.bind(this);
  }
  wine(){
    this.props.navigation.navigate("Wine");
  }

  refresh(){
    this.setState({
      refreshing: true,
    })
    let newData = [];
    imageRandom = [
      "https://static1.squarespace.com/static/57639f02d2b8578a71efcb8a/577b0fbf414fb50acf4c71fc/577b0fc0b8a79bc24ecd753f/1467682754660/menagerie-charms-pourer-assortment-500x500px.png",
      "https://www.hertzpageo.com/img/blog/delicious-drives/Italy/Day1/DAY%201%20ITALY%20MOBILE%20BANNER%205%20500x500px.jpg",
      "http://www.gourmet-japan.com/2013/images/villa-maria_500x500px.jpg",
      "https://static1.squarespace.com/static/57639f02d2b8578a71efcb8a/577b0fbf414fb50acf4c71fc/577b0fc16b8f5b92c34393ec/1467682754416/menagerie-charms-swordfish-500x500px.png",
      "https://static1.squarespace.com/static/57639f02d2b8578a71efcb8a/5776cb95cd0f68ca008e18e7/5776cb97cd0f68ca008e1912/1467403161470/casafina-deer-friends-glass-500x500px.png"
    ]
    for (i = this.state.news.length; i < this.state.news.length + 3; i++){
      newData.push({id: i + 1, title: "Wine Bottle " + (i + 1), date: "Red Wine / 2000", description:"Lorem ipsum, sed do eiusmod tempor.", image: imageRandom[Math.floor(Math.random()*imageRandom.length)] })
    }
    data =  this.state.news.concat(newData);
    setTimeout(() => {
      this.setState({
        refreshing: false,
        news: data
      })
    }, 100)
  }

  renderFooter(){
    if (!this.state.refreshing){
      return (
        <View style={{padding: 20}}>
          <ActivityIndicator animating color="white" size="large" />
        </View>
      )
    }else{
      return (<View></View>)
    }
  }
  render() {
    return (
      <View>
        <Header title="News" navigation={this.props.navigation} goBack={true}/>
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item) => item.id}
            ListFooterComponent={this.renderFooter}
            showsVerticalScrollIndicator={false}
            refreshing={false}
            onEndReached={this.refresh}
            onEndReachedThreshold={1}
            data={this.state.news}
            renderItem={({item, index}) =>
            <TouchableOpacity onPress={this.wine}>
              {index % 2 == 0 ?
                <View style={[styles.topic]}>
                  <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{uri: item.image}} />
                  </View>
                  <View style={styles.information}>
                    <Text style={styles.title}>{item.title.toUpperCase()}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.description}>{item.description}.</Text>
                    <View style={styles.bestPrice}>
                      <Image source={ButtonPrice} style={styles.buttonPrice}/>
                      <Text style={styles.bestPriceText}>BEST PRICE</Text>
                    </View>
                    <View style={styles.priceWrapper}>
                      <Text style={styles.price}>$2.50 <Text style={styles.unit}>Glass</Text></Text>
                      <Text style={styles.price}>$2.50 <Text style={styles.unit}>Bottle</Text></Text>
                    </View>
                  </View>
                </View>
              :
                <View style={[styles.topic, styles.topicReverse]}>
                  <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{uri: item.image}} />
                  </View>
                  <View style={styles.information}>
                    <Text style={styles.title}>{item.title.toUpperCase()}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.description}>{item.description}.</Text>
                    <View style={styles.bestPrice}>
                      <Image source={ButtonPrice} style={styles.buttonPrice}/>
                      <Text style={styles.bestPriceText}>BEST PRICE</Text>
                    </View>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>$2.50 <Text style={styles.unit}>Glass</Text></Text>
                        <Text style={styles.price}>$2.50 <Text style={styles.unit}>Bottle</Text></Text>
                    </View>
                  </View>
                </View>
              }
            </TouchableOpacity>
            }
          />

        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#27293E'
  },
  topic:{
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center'
  },
  topicReverse:{
    flexDirection: 'row-reverse'
  },
  bestPrice:{
    position: 'absolute',
    right: 5,
    bottom: 25,
    zIndex: 11
  },
  buttonPrice:{
      width: 65,
      height: 65,
  },
  bestPriceText: {
    marginTop: -48,
    marginLeft: 5,

    color: 'white',
    fontSize: 11,
    alignItems: 'center',
    textAlign: 'center',
    width:55,
    height: 55,
  },
  imageWrapper:{
    height: width / 2,
    width: width / 2
  },
  image:{
    height: width / 2,
    width: width / 2,
    resizeMode: 'cover'
  },
  information: {
    height: width / 2,
    width: width / 2,
    backgroundColor: 'white',
  },
  title:{
    padding:15,
    paddingBottom: 0,
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  priceWrapper: {
    position: 'absolute',
    bottom: 0,
    left:0,
    right:0,
    backgroundColor: '#27293E',
    padding: 10,
  },
  price: {
    color:'white',
    fontSize: 18,
    marginRight: 5,
  },
  unit: {
    color: 'white',
    fontSize: 13,
    fontStyle: 'italic',
  },
  date:{
    padding:15,
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 13,
    marginTop: 3,
    marginBottom: 10
  },
  description:{
    padding:15,
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 12,
    lineHeight: 15,
    fontStyle: 'italic'
  }
});
