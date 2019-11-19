import React from 'react'
import { Image, StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

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
  username:{
    textAlign: "center",
    fontSize : 24,
    fontFamily: 'Baskerville'
  },
  heading:{
    paddingTop: 20,
    paddingLeft: 40,
    textAlign: "left",
    fontSize : 24,
    fontFamily: 'Baskerville'
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 150/2
  },
  viewContainer:{
    paddingTop: 80,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffc0cb"
  }
});

export default ProfileScreen
