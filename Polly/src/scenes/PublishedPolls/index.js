import PublishedPollsContainer from './PublishedPollsContainer'
import PollDetails from './PollDetails'
import { createStackNavigator } from 'react-navigation-stack'

const RouteConfigs = {
  Polls: {
    screen: PublishedPollsContainer
  },
  PollDetails: {
    screen: PollDetails
  }
}

const StackNavigatorConfigs = {
  initialRouteName: 'Polls',
}


export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)
