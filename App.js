import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './src/screens/Welcome';
import TodoApp from './src/screens/TodoApp';
import HomeScreen from './src/screens/HomeScreen'
import EventDetail from './src/screens/EventDetail'
import CategoryPage from './src/screens/CategoryPage'


const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      title: 'Welcome to React Native'
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen'
    }
  },
  EventDetail:{
    screen:EventDetail,
    navigationOptions:{
      title:'Event Detail'
    }
  },

  CategoryPage:{
    screen:CategoryPage,
    navigationOptions:{
      title:'Category Page'
    }
  }
},

 {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#fff'
    }
  }
});

export default createAppContainer(AppNavigator);