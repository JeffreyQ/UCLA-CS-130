import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

import { dummyPoll } from '../../store'
import Heading from './heading'
import Card from './card'
import PollDetails from './PollDetails'

class PublishedPollsScreen extends React.Component {
  onCardPress = pollId => {
    return this.props.navigation.navigate('PollDetails', {
      pollId
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
          <Heading />
          <View>
            <ScrollView style={{height:'100%', alignSelf:'stretch', paddingRight: 20, paddingLeft: 20}}>
              <Card poll={dummyPoll} onPress={() => this.onCardPress(1)}/>
              <Card poll={dummyPoll} />
              <Card poll={dummyPoll} />
              <Card poll={dummyPoll} />
              <Card poll={dummyPoll} />
              <Card poll={dummyPoll} />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    paddingTop: 30
  }
});

const RouteConfigs = {
  Polls: {
    screen: PublishedPollsScreen
  },
  PollDetails: {
    screen: PollDetails
  }
}

const StackNavigatorConfigs = {
  initialRouteName: 'Polls',

}


export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)
