import React from 'react'
import CreatePollScreen from './src/scenes/CreatePoll'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

class PublishedPollsScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my published polls screen </Text>
      </View>
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

// class CreatePollScreen extends React.Component {
//   render() {
//     return(
      
//       <View style={{flex: 1, alignItems: 'center'}}> 
//         <Header centerComponent={{ text: 'Create New Poll', style: { color: '#fff',  fontSize: 20, fontWeight: 'bold' } }}>
//         </Header>
//         <Text> Select Poll Type </Text>
//         <Button
//           title="Select All"
//           type="solid"
//         />
//         <Button
//           title="Multiple Choice"
//           type="solid"
//         />
//         <Button
//           title="Short Answer"
//           type="solid"
//         />
//         <Button
//           title="Number Scale"
//           type="solid"
//         />
//       </View>
//     );
//   }
// }

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
    Inbox: {
      screen: PollInboxScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
            const iconName = `ios-mail`;
            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      },
    }
  },
  {
    initialRouteName: 'Published',
    order: ['Published', 'Create', 'Inbox'],
    tabBarOptions: { showIcon: true, }
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);
