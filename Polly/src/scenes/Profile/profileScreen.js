import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { connect } from 'react-redux'
import { StyleSheet, Text, SafeAreaView, View,Button } from 'react-native'
import { heading1Text, bodyText, grayBody } from '../../textMixins'
import { ScrollView } from 'react-navigation'


import Card from './card'
import Heading from './heading'
import SubscriptionScreen  from './subscriptionScreen'
import SubscriberScreen from './subscriberScreen'
import PollResponse from '../PollResponse'


import { getSubscribedTo, getSubscribers } from '../../actions/user' 
import { getMyPolls, getPollResponse } from '../../actions/polls' 
import { logout } from '../../actions/auth'

class ProfileScreen extends React.Component{
  constructor(props) {
    super(props)
    props.getSubscribers()
    props.getSubscribedTo()
    props.getMyPolls()
  }

  onPress = (pollId) => {
    const { getPollResponse } = this.props
    getPollResponse(pollId)
    return this.props.navigation.navigate('ResponseContainer', {
      pollId,
      getPollResponse
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <Heading
          subscriberPress={() => navigate('SubscriberScreen',{subscribers:this.props.subscribers})} 
          subscriptionPress={() => navigate('SubscriptionScreen', {subscribed:this.props.subscribed})} 
          subscribers={this.props.subscribers} 
          subscribed={this.props.subscribed}
          logout={this.props.logout}
        />
        <View style={styles.bodyContainer}>
          <View style={styles.heading}>
            <Text style={{...heading1Text}}>My Polls</Text>
            <Text style={{...bodyText, ...grayBody}}>Filter</Text>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView
              style={{
                height:'100%',
                alignSelf:'stretch',
                padding: 20,
              }}>
                {this.props.myPolls.map( poll => <Card key={poll.id} poll={poll} onPress={this.onPress(poll.id)} />)}
            </ScrollView>
          </View>
        </View>
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
  },
  scrollContainer: {
    padding: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: '#A5A3A3'
  },
});

const mapStateToProps = state => {
  return {
    subscribers: state.User.subscribers,
    subscribed: state.User.subscribed,
    myPolls: state.Polls.myPolls,
  }
}

const mapDispatchToProps = dispatch => ({
  getSubscribers: () => dispatch(getSubscribers()),
  getSubscribedTo: () => dispatch(getSubscribedTo()),
  getMyPolls: () => dispatch(getMyPolls()),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

