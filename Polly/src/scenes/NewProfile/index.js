import SubscriptionScreen from './subscriptionScreen'
import SubscriberScreen from './subscriberScreen'
import ProfileContainer from './ProfileContainer'
import PollResponse from './PollResponse'
import GeneralResponse from './PollResponse/GeneralResponse'
import { createStackNavigator } from 'react-navigation-stack'

const RouteConfigs = {
    Profile: {
      screen: ProfileContainer
    },
    SubscriptionScreen: {
      screen: SubscriptionScreen
    },
    SubscriberScreen:{
      screen: SubscriberScreen
    },
    PollResponse:{
        screen: PollResponse
    },
    GeneralResponse:{
        screen: GeneralResponse
    }
  }
  
  const StackNavigatorConfigs = {
    initialRouteName: 'Profile',
  }

  export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)