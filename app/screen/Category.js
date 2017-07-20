/* @flow */
import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  ScrollView,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import BackgroundImage from '../img/background.png';
import TopicImage from '../img/topicImage.png';
import LineTitle from '../img/lineTitle.png';
import ButtonPrice from '../img/button_active.png';
import Header from './Header';

const { width, height } = Dimensions.get('window');
export default class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      refreshing: false,
      topics: [
        {id: "1", title: "Spinach Sweet Crips Salad 3", price: "25.00", image: "http://www.qualitydestinations.com/wp-content/uploads/Thai-Food.jpg"},
        {id: "2", title: "Spinach Sweet Crips Salad 4", price: "10.00", image: "http://cityclubdallas.com/wp-content/uploads/2015/05/food-500x3001.jpg"},
        {id: "3", title: "Spinach Sweet Crips Salad 5", price: "15.00", image: "http://3.bp.blogspot.com/-T7bFMND2Pwg/UIBq1PKTpFI/AAAAAAAAAE8/U4qeKOWFFeE/s1600/french-food-recipes.jpg"},
        {id: "4", title: "Spinach Sweet Crips Salad 2", price: "50.00", image: "http://cdn.24.co.za/files/Cms/General/d/2374/5051d0297c264ac38d45957111efcf1c.jpg"},
        {id: "5", title: "Spinach Sweet Crips Salad 2", price: "90.00", image: "http://www.socialwineandtapas.com/wp-content/themes/swt/img/grid/images/grid_26.jpg"},
      ]
    }
    this.refresh = this.refresh.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.post = this.post.bind(this);
  }
  post(){
    this.props.navigation.navigate("Post");
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
    for (i = this.state.topics.length; i < this.state.topics.length + 3; i++){
      newData.push({id: i + 1, title: "Tater tots Salad " + (i + 1), price: "50.00", image: imageRandom[Math.floor(Math.random()*imageRandom.length)] })
    }
    data =  this.state.topics.concat(newData);
    setTimeout(() => {
      this.setState({
        refreshing: false,
        topics: data
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
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Header title={params.category} navigation={this.props.navigation} goBack={true}/>

          <View style={styles.container}>
            <View style={styles.menu}>
              <FlatList
                style={styles.flatlist}
                keyExtractor={(item) => item.id}
                ListFooterComponent={this.renderFooter}
                showsVerticalScrollIndicator={false}
                refreshing={false}
                onEndReached={this.refresh}
                onEndReachedThreshold={1}
                data={this.state.topics}
                renderItem={({item, index}) =>
                  <TouchableOpacity onPress={() => {this.post(item.id)}}>
                    <View style={styles.topic}>
                      <Image source={{uri: item.image}} style={styles.imageTopic}/>
                      <View style={styles.title}>
                        <View style={styles.lineTitleWrapper}>
                          <Image source={LineTitle} style={styles.lineTitle} />
                        </View>
                        <Text style={styles.titleText}>{item.title}</Text>
                      </View>
                      <View style={styles.buttonPriceWrapper}>
                        <Text style={styles.price}>$ {item.price}</Text>
                        <Image source={ButtonPrice} />
                      </View>
                      {/* My stupid, really stupid */}
                      {index != 0 ? <View style={styles.stupidButtonPrice}>
                        <Image source={ButtonPrice} />
                      </View> : <View></View>}

                    </View>
                  </TouchableOpacity>
                }
              />
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    backgroundColor: '#27293E',
  },
  flatlist:{
    marginTop: 50
  },
  topic: {
    minWidth: width,
  },
  buttonPriceWrapper:{
    position: 'absolute',
    right: 20,
    zIndex: 1,
    bottom: -30,
  },
  stupidButtonPrice:{
    position:'absolute',
    top:-70,
    right: 20
  },
  price:{
    position:'absolute',
    left: 15,
    color: 'white',
    top: 40,
    width: 70,
    textAlign: 'center',
    fontSize: 15,
    zIndex: 1000
  },
  lineTitleWrapper: {
    position: 'absolute',
    bottom: 0,
    left:0,
    right: 0
  },
  lineTitle:{
    height: 40,
  },
  imageTopic:{
    height: 200,
    resizeMode: 'cover',
    width: width
  },
  title: {
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    padding: 10,
  },
  titleText:{
    color: 'white'
  },
  menu:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
