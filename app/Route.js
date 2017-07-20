/* @flow */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import Home from "./screen/Home";
import Menu from "./screen/Menu";
import Category from "./screen/Category";
import Post from "./screen/Post";
import NewCategory from "./screen/NewCategory";
import New from "./screen/New";
import WineCategory from "./screen/WineCategory";
import Wine from "./screen/Wine";
import Booking from "./screen/Booking";
import Feedback from "./screen/Feedback";
import Contact from "./screen/Contact";

const Route = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      title: "Menu"
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      title: "Category"
    }
  },
  Post: {
    screen: Post,
    navigationOptions: {
      title: "Post"
    }
  },
  NewCategory: {
    screen: NewCategory,
    navigationOptions: {
      title: "NewCategory"
    }
  },
  New: {
    screen: New,
    navigationOptions: {
      title: "New"
    }
  },
  WineCategory: {
    screen: WineCategory,
    navigationOptions: {
      title: "WineCategory"
    }
  },
  Wine: {
    screen: Wine,
    navigationOptions: {
      title: "Wine"
    }
  },
  Booking: {
    screen: Booking,
    navigationOptions: {
      title: "Booking"
    }
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: {
      title: "Feedback"
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      title: "Contact"
    }
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#27293E",
      opacity: 1
    },
    headerTitleStyle: {
      color: "white",
      alignSelf: "center",
      fontWeight: "normal",
    },
  }
})
export default Route;
