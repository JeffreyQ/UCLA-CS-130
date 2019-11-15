import React from 'react'
import { Image, StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class ProfileScreen extends React.Component{
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
            <Image source={require('./profile.jpg')} style={styles.profilePic}/>
            </View>
            <Text style={styles.username}>Username</Text>
            <View style={{flex:3}}>
              <Text style={styles.username}>Poll 1</Text>
              <Text style={styles.username}>Poll 2</Text>
              <Text style={styles.username}>Poll 3</Text>
            </View>
      </SafeAreaView>
        )
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  username:{
    flex:1,
    textAlign: "center",
    fontSize : 20,
    fontFamily: 'Baskerville'
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 150/2
  },
  viewContainer:{
    paddingTop: 100,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProfileScreen
