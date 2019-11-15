import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView } from 'react-navigation'
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
          <View style={{flex: 1}}>
            <ScrollView
              contentContainerStyle={{paddingBottom:20}}
              style={{
                height:'100%',
                alignSelf:'stretch',
                paddingRight: 20,
                paddingLeft: 20
              }}>
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
    flex: 1,
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
