import { StyleSheet } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SubscriptionScreen  from './subscriptionScreen'
import SubscriberScreen from './subscriberScreen'
import PollResponse from '../PollResponse'
import ProfileScreen from './profileScreen'

const RouteConfigs = {
    Profile: {
      screen: ProfileScreen
    },
    PollResponse: {
      screen: PollResponse
    },
    SubscriptionScreen: {
      screen: SubscriptionScreen
    },
    SubscriberScreen:{
      screen: SubscriberScreen
    },
  }
  
  const StackNavigatorConfigs = {
    initialRouteName: 'Profile',
  }

  export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)