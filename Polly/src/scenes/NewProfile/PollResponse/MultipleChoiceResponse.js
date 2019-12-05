import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView, withNavigation } from 'react-navigation'
import { heading1Text,heading2Text, bodyText, grayBody } from '../../../textMixins'
// import {  } from '../../actions/poll' 
import GeneralResponse from './GeneralResponse'
import OptionCard from './optionCard'
import { connect } from 'react-redux'

class MultipleChoiceResponse extends React.Component{
    render() {
        const {poll} = this.props
        const {navigate} = this.props.navigation
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
                        {poll.resp_struct.options.map((option,index) => 
                            <OptionCard option={option} votes={poll.aggregates.find(aggregate => aggregate.option === index) ? poll.aggregates.find(aggregate => aggregate.option === index).votes : 0} 
                            onPress={() => 
                                navigate('GeneralResponse',
                                {option:option, 
                            responses:poll.responses.filter(response => response.answer === index),allUsers:this.props.allUsers,users:this.props.users})}/>
                        )}
                        {/* {aggregates.map(aggregate => <OptionCard option={(aggregate.option===1) ? 'True' : 'False'} votes={aggregate.votes} 
                        onPress={() => 
                            navigate('GeneralResponseScreen',
                            {option:(aggregate.option===1) ? 'True' : 'False', 
                        responses:responses.filter(response => response.answer === aggregate.option),users:this.props.users})}/>)} */}
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

  export default withNavigation(MultipleChoiceResponse)