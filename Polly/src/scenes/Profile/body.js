import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { heading1Text, bodyText, grayBody } from '../../textMixins'
import Card from './card'
import PollResponse from '../PollResponse'

class ProfileBody extends React.Component {
  onCardPress = pollId => {
    return this.props.navigation.navigate('PollResponse', {
      pollId
    })
  }

  render() {
    return (
      <View style={styles.bodyContainer}>
        <View style={styles.heading}>
          <Text style={{...heading1Text}}>My Polls</Text>
          <Text style={{...bodyText, ...grayBody}}>Filter</Text>
        </View>
        <Card onPress={() => this.onCardPress(1)}/>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  bodyContainer: {
    padding: 20
  },
  heading: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

const RouteConfigs = {
  Profile: {
    screen: ProfileBody
  },
  PollResponse: {
    screen: PollResponse
  }
}

const StackNavigatorConfigs = {
  initialRouteName: 'Profile',
}

export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)
