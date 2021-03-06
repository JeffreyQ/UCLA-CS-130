import { StyleSheet } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import CreatePollScreen from './CreatePollScreen'
import TrueFalsePollCreationScreen from './TrueFalsePollCreationScreen'
import NumberScalePollCreationScreen from './NumberScalePollCreationScreen'
import ShortAnswerPollCreationScreen from './ShortAnswerPollCreationScreen'
import MultipleChoicePollCreationScreen from './MultipleChoicePollCreationScreen'

const RouteConfigs = {
  CreatePoll: {screen: CreatePollScreen},
  MultipleChoicePoll: {screen: MultipleChoicePollCreationScreen},
  TrueFalsePoll: {screen: TrueFalsePollCreationScreen},
  NumberScalePoll: {screen: NumberScalePollCreationScreen},
  ShortAnswerPoll: {screen: ShortAnswerPollCreationScreen},
}

const StackNavigatorConfig = {
  initialRouteName: 'CreatePoll'
}

export default createStackNavigator(RouteConfigs, StackNavigatorConfig)

