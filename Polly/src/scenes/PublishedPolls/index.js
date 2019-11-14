import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'

import { dummyPoll } from '../../store'
import Heading from './heading'
import Card from './card'

class PublishedPollsScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
          <Heading />
          <Card poll={dummyPoll} />
          <Card poll={dummyPoll} />
          <Card poll={dummyPoll} />
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
