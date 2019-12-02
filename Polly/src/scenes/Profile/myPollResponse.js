import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView } from 'react-navigation'
import { heading1Text,heading2Text, bodyText, grayBody } from '../../textMixins'
// import {  } from '../../actions/poll' 
import ResponseEntry from './responseEntry'
import { connect } from 'react-redux'

const users = [
    {
      id:1,
      name: 'Stephanie Y',
      image: require('./profile.jpg'),
      response: 1
    },
    {
      id:2,
      name: 'Ram G.',
      image: require('./profile.jpg'),
      response: 1
    },
    {
      id:3,
      name: 'Jeff Q.',
      image: require('./profile.jpg'),
      response: 1
    },
    {
      id:4,
      name: 'Jesse C.',
      image: require('./profile.jpg'),
      response: 1
    },
    {
      id:5,
      name: 'Lawrence C.',
      image: require('./profile.jpg'),
      response: 1
    },
  ]
class MyPollResponseScreen extends React.Component{
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style ={styles.headingContainer}>
                    <Text style={styles.heading}> Poll Response #1 </Text>
                </View>
                <View style ={styles.headingContainer}>
                    <Text style={styles.average}> 1 </Text>
                    <Text> Average Response </Text>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        style={{
                        height:'100%',
                        alignSelf:'stretch',
                        padding: 20,
                        }}>
                        {users.map(user =><ResponseEntry key={user.id}user={user}/>)}
                    </ScrollView>
                </View>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    average:{
        fontWeight: 'bold',
    },
    headingContainer: {
      padding: 20,
      alignItems: 'center',
      borderBottomWidth: 0.4,
      borderBottomColor: '#A5A3A3'
    },
    scrollContainer: {
      padding: 10,
      borderBottomWidth: 0.4,
      borderBottomColor: '#A5A3A3'
    },
    profilePicContainer: {
      alignItems: 'center'
    },
    profilePic: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    heading: {
      ...heading2Text,
      flexDirection: 'row',
      alignItems: 'center'
    },
    bodyContainer: {
      padding: 20
    },
  })

  export default MyPollResponseScreen