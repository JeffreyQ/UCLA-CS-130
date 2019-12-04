import React from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tab'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Provider, connect } from 'react-redux'

import PublishedPollsScreen from './src/scenes/PublishedPolls'
import CreatePollScreen from './src/scenes/CreatePoll'
import ProfileScreen from './src/scenes/Profile'
import LoginScreen from './src/scenes/LoginScreen'
import SearchScreen from './src/scenes/Search'

import store from './src/store'
import { checkAuth } from './src/actions/auth'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props.checkAuth()
  }

  getRenderedComponent = () => {
    if (this.props.Auth.JSONWebToken) {
      return <AppContainer />
    } else if (this.props.Auth.checkedAuth) {
      return <LoginScreen />
    } else {
      return null
    }
  }

  render() {
    return this.getRenderedComponent()
  }
}

const mapStateToProps = state => ({ Auth: state.Auth })

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => dispatch(checkAuth())
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default AppWrapper

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
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
            const iconName = `ios-search`;
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
    order: ['Published', 'Create', 'Search', 'Profile'],
    tabBarOptions: { showIcon: true, }
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);
