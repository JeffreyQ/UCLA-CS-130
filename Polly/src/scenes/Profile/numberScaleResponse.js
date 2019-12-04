import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView } from 'react-navigation'
import { heading1Text,heading2Text, bodyText, grayBody } from '../../textMixins'
// import {  } from '../../actions/poll' 
import ResponseEntry from './responseEntry'
import { connect } from 'react-redux'

const responses = [ 
    {
        "answer": 1,
        "poll_id": 3,
        "comment": null,
        "id": 10,
        "responder_id": 7,
        "created_date": "2019-12-02 08:01:30.968771"
    },
    {
        "answer": 2,
        "poll_id": 3,
        "comment": "help me god",
        "id": 11,
        "responder_id": 1,
        "created_date": "2019-12-02 08:02:25.585738"
    },
    {
        "answer": 2,
        "poll_id": 3,
        "comment": null,
        "id": 12,
        "responder_id": 2,
        "created_date": "2019-12-02 08:02:50.283949"
    }
]
const aggregates = [
{
    "votes": 1,
    "option": 1
},
{
    "votes": 2,
    "option": 2
}
]

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
      id:7,
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
class NumberScaleResponseScreen extends React.Component{
    render() {
        let average = 0;
        for(let r in responses)
        {
            console.log(r);
            average = average + responses[r]['answer']
        }
        average = (average/responses.length).toFixed(2)
        return(
            <SafeAreaView style={styles.container}>
                <View style ={styles.headingContainer}>
                    <Text style={styles.heading}> {this.props.navigation.getParam('prompt')} </Text>
                </View>
                <View style ={styles.headingContainer}>
                    <Text style={styles.average}> {average} </Text>
                    <Text> Average Response </Text>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        style={{
                        height:'100%',
                        alignSelf:'stretch',
                        padding: 20,
                        }}>
                        {responses.map(response =><ResponseEntry response={response} user={(users.filter(user => user.id === response.responder_id))[0]}/>)}
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

  export default NumberScaleResponseScreen