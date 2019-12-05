import SubscriptionScreen from './subscriptionScreen'
import SubscriberScreen from './subscriberScreen'
import ProfileContainer from './ProfileContainer'
import PollResponse from './PollResponse'
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
    }
  }
  
  const StackNavigatorConfigs = {
    initialRouteName: 'Profile',
  }

  export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)