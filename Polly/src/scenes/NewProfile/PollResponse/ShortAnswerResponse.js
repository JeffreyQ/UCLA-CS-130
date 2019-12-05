import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView } from 'react-navigation'
import { heading1Text,heading2Text, bodyText, grayBody } from '../../../textMixins'
// import {  } from '../../actions/poll' 
import Accordion from './accordion'
import { connect } from 'react-redux'


class ShortAnswerResponse extends React.Component{
    render() {
        const {poll} = this.props
        return(
            <SafeAreaView style={styles.container}>
                <View style ={styles.headingContainer}>
                    <Text style={styles.heading}> {poll.prompt} </Text>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        style={{
                        height:'100%',
                        alignSelf:'stretch',
                        padding: 20,
                        }}>
                        {poll.responses.map(response => <Accordion data={response.comment} user={(this.props.users.filter(user => user.follower_id === response.responder_id))[0]}/>)}
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

  export default ShortAnswerResponse