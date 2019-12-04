import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView } from 'react-navigation'
import { heading1Text,heading2Text, bodyText, grayBody } from '../../textMixins'
// import {  } from '../../actions/poll' 
import GeneralResponseScreen from './generalResponse'
import OptionCard from './optionCard'
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
},
{
    "votes": 4,
    "option": 3
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
class SelectAllResponseScreen extends React.Component{
    render() {
        const {navigate} = this.props.navigation
        return(
            <SafeAreaView style={styles.container}>
                <View style ={styles.headingContainer}>
                    <Text style={styles.heading}> {this.props.navigation.getParam('prompt')} </Text>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        style={{
                        height:'100%',
                        alignSelf:'stretch',
                        padding: 20,
                        }}>
                        {aggregates.map(aggregate => <OptionCard option={"Option "+ aggregate.option} votes={aggregate.votes} 
                        onPress={() => 
                            navigate('GeneralResponseScreen',
                            {option:"Option "+ aggregate.option , 
                        responses:responses.filter(response => response.answer === aggregate.option),users:users})}/>)}
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

  export default SelectAllResponseScreen