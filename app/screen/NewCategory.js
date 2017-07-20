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
const {width, height} = Dimensions.get('window');


export default class NewCategory extends Component {
  constructor(props){
    super(props);
    this.state = {
      refreshing: false,
      news: [
        {id: 0, title: 'Lorem Ipsum 0', date: 'Tuesday, Aprial 28th, 2017', description: 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: "https://www.burleymanor.com/wp-content/uploads/2016/03/AFT-BM-500x300.jpg"},
        {id: 1, title: 'Lorem Ipsum 1', date: 'Tuesday, Aprial 28th, 2017', description: 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: "http://medias.sit.herault-tourisme.com/500x300/RESLAR034FS00274/4-4-assiettes-2016.jpg"},
        {id: 2, title: 'Lorem Ipsum 2', date: 'Tuesday, Aprial 28th, 2017', description: 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: "http://www.desigbarcelona.com/blog/wp-content/uploads/2011/07/Tapas-Bars-EN.jpg"},
        {id: 3, title: 'Lorem Ipsum 3', date: 'Tuesday, Aprial 28th, 2017', description: 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: "https://media.primomo.co/3680/tapasenbarcelona.500x300.jpg"},
        {id: 4, title: 'Lorem Ipsum 4', date: 'Tuesday, Aprial 28th, 2017', description: 'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: "https://www.citypassguide.com/media/slideshow/Cafe-de-Opera-banner.jpg.500x300_q85_crop.jpg"}
      ]
    }
    this.renderFooter = this.renderFooter.bind(this);
    this.refresh = this.refresh.bind(this);
    this.new = this.new.bind(this);
  }
  new(){
    this.props.navigation.navigate("New");
  }
  refresh(){
    this.setState({
      refreshing: true,
    })
    let newData = [];
    imageRandom = [
      "https://www.burleymanor.com/wp-content/uploads/2016/03/AFT-BM-500x300.jpg",
      "http://medias.sit.herault-tourisme.com/500x300/RESLAR034FS00274/4-4-assiettes-2016.jpg",
      "http://www.desigbarcelona.com/blog/wp-content/uploads/2011/07/Tapas-Bars-EN.jpg",
      "https://media.primomo.co/3680/tapasenbarcelona.500x300.jpg",
      "https://www.citypassguide.com/media/slideshow/Cafe-de-Opera-banner.jpg.500x300_q85_crop.jpg"
    ]
    for (i = this.state.news.length; i < this.state.news.length + 3; i++){
      newData.push({id: i + 1, title: "Lorem " + (i + 1), date: "7 July 2017", description:"Lorem Ipsum, bla bads jasdja sjkdsa jjk sadnsad", image: imageRandom[Math.floor(Math.random()*imageRandom.length)] })
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
            <TouchableOpacity onPress={this.new}>
              {index % 2 == 0 ?
                <View style={[styles.topic]}>
                  <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{uri: item.image}} />
                  </View>
                  <View style={styles.information}>
                    <Text style={styles.title}>{item.title.toUpperCase()}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.description}>{item.description}.</Text>
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
    padding: 15,
    backgroundColor: 'white',
  },
  title:{
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  date:{
    fontSize: 8,
    marginVertical: 8
  },
  description:{
    fontSize: 12,
    lineHeight: 15

  }
});
