import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { connect } from 'react-redux'
import { StyleSheet, Text, SafeAreaView, View,Button } from 'react-native'
import { heading1Text, bodyText, grayBody } from '../../textMixins'
import { ScrollView } from 'react-navigation'


import Card from './card'
import MyPollResponseScreen from './myPollResponse'
import Heading from './heading'
import SubscriptionScreen  from './subscriptionScreen'
import SubscriberScreen from './subscriberScreen'
import PollResponse from '../PollResponse'


import { getSubscribedTo, getSubscribers } from '../../actions/user' 
import { getMyPolls } from '../../actions/polls' 
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

class ProfileScreen extends React.Component{
  constructor(props) {
    super(props)
    props.getSubscribers()
    props.getSubscribedTo()
    props.getMyPolls()
  }

  onCardPress = pollId => {
    return this.props.navigation.navigate('PollResponse', {
      pollId
    })
  }
  checkPoll=(param)=>{
 
    switch(param) {
 
      case 'multChoice':
        return 'TrueFalseResponseScreen';
        break;
      
      case 'selectAll':
        return 'SelectAllResponseScreen';
        break;
 
      case 'freeResp':
        return 'ShortAnswerResponseScreen';
        break;
 
      case 'numScale':
        return 'NumberScaleResponseScreen';
        break;
 
      default:
        return 'NumberScaleResponseScreen';
    
      }
 
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
          {/* <Card onPress={() => navigate('MyPollResponseScreen')}/> */}
          <View style={styles.scrollContainer}>
            <ScrollView
              style={{
                height:'100%',
                alignSelf:'stretch',
                padding: 20,
              }}>
                {this.props.myPolls.map( poll => <Card key={poll.id} poll={poll} onPress={() => navigate(this.checkPoll(poll.form_type),{prompt:poll.prompt})}/>)}
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

// const RouteConfigs = {
//   Profile: {
//     screen: ProfileScreen
//   },
//   PollResponse: {
//     screen: PollResponse
//   },
//   SubscriptionContainer: {
//     screen: SubscriptionContainer
//   },
//   SubscriberContainer:{
//     screen: SubscriberContainer
//   },
// }

// const StackNavigatorConfigs = {
//   initialRouteName: 'Profile',
// }


// export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)
