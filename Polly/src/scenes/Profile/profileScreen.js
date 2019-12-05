import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { connect } from 'react-redux'
import { StyleSheet, Text, SafeAreaView, View,Button } from 'react-native'
import PollResponse from '../PollResponse'
import { heading1Text, bodyText, grayBody } from '../../textMixins'
import Card from './card'
import MyPollResponseScreen from './myPollResponse'
import Heading from './heading'
import SubscriptionScreen  from './subscriptionScreen'
import SubscriberScreen from './subscriberScreen'
import { getSubscribedTo, getSubscribers } from '../../actions/user' 
import { logout } from '../../actions/auth'

class ProfileScreen extends React.Component{
  constructor(props) {
    super(props)
    props.getSubscribers()
    props.getSubscribedTo()
  }

  onCardPress = pollId => {
    return this.props.navigation.navigate('PollResponse', {
      pollId
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
          <Card onPress={() => navigate('MyPollResponseScreen')}/>
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
  }
});

const mapStateToProps = state => {
  return {
    subscribers: state.User.subscribers,
    subscribed: state.User.subscribed,
  }
}

const mapDispatchToProps = dispatch => ({
  getSubscribers: () => dispatch(getSubscribers()),
  getSubscribedTo: () => dispatch(getSubscribedTo()),
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
