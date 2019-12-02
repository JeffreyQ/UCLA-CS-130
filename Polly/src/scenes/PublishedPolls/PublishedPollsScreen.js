import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView, withNavigation } from 'react-navigation'

import { dummyPoll } from '../../store'
import Heading from './heading'
import Card from './card'

class PublishedPollsScreen extends React.Component {
  onCardPress = poll => {
    const { submitAnswer } = this.props
    return this.props.navigation.navigate('PollDetails', {
      poll,
      submitAnswer
    })
  }

  render() {
    const { pollsSubscribedTo } = this.props
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
                {pollsSubscribedTo.map(poll =>
                  <Card
                    key={poll.id}
                    poll={poll}
                    onPress={() => this.onCardPress(poll)}
                    user={this.props.users.find(user => user.id === poll.id)}
                  />
                )}
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

export default withNavigation(PublishedPollsScreen)
