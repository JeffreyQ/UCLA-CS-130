import React from 'react'
import CreatePollScreen from './src/scenes/CreatePoll'
import ProfileScreen from './src/scenes/Profile'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'


import PublishedPollsScreen from './src/scenes/PublishedPolls'

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

class PollInboxScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my poll inbox screen </Text>
      </View>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Published: {
      screen: PublishedPollsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
            const iconName = `ios-list`;
            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      },
    },
    Create: {
      screen: CreatePollScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
            const iconName = `ios-add-circle-outline`;
            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
            const iconName = `ios-person`;
            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      },
    }
  },
  {
    initialRouteName: 'Published',
    order: ['Published', 'Create', 'Profile'],
    tabBarOptions: { showIcon: true, }
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);
