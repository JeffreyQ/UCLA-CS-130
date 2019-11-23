import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import PollResponse from '../PollResponse'
import { heading1Text, bodyText, grayBody } from '../../textMixins'
import Card from './card'

import Heading from './heading'
import ProfileBody from './body'
import Card from './card'

class ProfileScreen extends React.Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Heading />
        <ProfileBody />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer:{
    paddingTop: 80,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffc0cb"
  },
  bodyContainer: {
    padding: 20
  },
  heading: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

const RouteConfigs = {
  Profile: {
    screen: ProfileScreen
  },
  PollResponse: {
    screen: PollResponse
  }
}

const StackNavigatorConfigs = {
  initialRouteName: 'Profile',
}

export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)
