import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView } from 'react-navigation'
import { heading1Text,heading2Text, bodyText, grayBody } from '../../../textMixins'
// import {  } from '../../actions/poll' 
import ResponseEntry from './responseEntry'
import { connect } from 'react-redux'

class GeneralResponse extends React.Component{
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style ={styles.headingContainer}>
                    <Text style={styles.heading}> {this.props.navigation.getParam('option')} </Text>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        style={{
                        height:'100%',
                        alignSelf:'stretch',
                        padding: 20,
                        }}>
                            {this.props.navigation.getParam('responses').map(response => 
                            <ResponseEntry response={this.props.navigation.getParam('option')} 
                            users={this.props.navigation.getParam('allUsers')}
                            user={(this.props.navigation.getParam('users')
                            .filter(user => user.follower_id === response.responder_id))[0]}/>)}
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

  export default GeneralResponse