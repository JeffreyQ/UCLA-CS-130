import { StyleSheet } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SubscriptionScreen  from './subscriptionScreen'
import SubscriberScreen from './subscriberScreen'
import PollResponse from '../PollResponse'
import ProfileScreen from './profileScreen'
import NumberScaleResponseScreen from './numberScaleResponse'
import TrueFalseResponseScreen from './trueFalseResponseScreen'
import SelectAllResponseScreen from './selectAllResponse'
import ShortAnswerResponseScreen from './shortAnswerResponse'
import GeneralResponseScreen from './generalResponse'
import ResponseContainer from './responseContainer'

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
    ResponseContainer:{
      screen: ResponseContainer
    },
    GeneralResponseScreen:{
      screen: GeneralResponseScreen
    }
  }
  
  const StackNavigatorConfigs = {
    initialRouteName: 'Profile',
  }

  export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)