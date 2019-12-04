import { StyleSheet } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SubscriptionScreen  from './subscriptionScreen'
import SubscriberScreen from './subscriberScreen'
import PollResponse from '../PollResponse'
import ProfileScreen from './profileScreen'
import MyPollResponseScreen from './myPollResponse'
import NumberScaleResponseScreen from './numberScaleResponse'
import TrueFalseResponseScreen from './trueFalseResponseScreen'
import GeneralResponseScreen from './generalResponse'

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
    MyPollResponseScreen:{
      screen: MyPollResponseScreen
    },
    NumberScaleResponseScreen:{
      screen: NumberScaleResponseScreen
    },
    TrueFalseResponseScreen:{
      screen: TrueFalseResponseScreen
    },
    GeneralResponseScreen:{
      screen: GeneralResponseScreen
    }
  }
  
  const StackNavigatorConfigs = {
    initialRouteName: 'Profile',
  }

  export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)