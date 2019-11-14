import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native'

import { dummyPoll } from '../../store'
import Heading from './heading'
import Card from './card'

class PublishedPollsScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
          <Heading />
          <ScrollView>
            <Card poll={dummyPoll} />
            <Card poll={dummyPoll} />
            <Card poll={dummyPoll} />
            <Card poll={dummyPoll} />
          </ScrollView>
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
    padding: 30
  }
});


export default PublishedPollsScreen
