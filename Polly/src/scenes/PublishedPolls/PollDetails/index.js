import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { heading1Text, heading2Text } from '../../../textMixins'

import NumberScalePoll from './NumberScalePoll'

class PollDetails extends React.Component {
  renderPollComponent = poll => {
    const submitAnswer = this.props.navigation.getParam('submitAnswer')

    switch (poll.form_type) {
      case "numScale":
        return <NumberScalePoll poll={poll} submitAnswer={submitAnswer}/>
    }
  }
  render() {
    const poll = this.props.navigation.getParam('poll')
    const {width} = Dimensions.get('window')

    return (
      <View>
        <View style={{
          width,
          height: width,
          backgroundColor: 'rgba(86, 204, 242, .08)',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={{height: 150, width: 150}} />
          <Text style={styles.title}>{poll.prompt}</Text>
        </View>
        <View style={styles.pollDetailsContainer}>
          {this.renderPollComponent(poll)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    ...heading1Text
  },
  pollExpiration: {
    ...heading2Text
  },
  pollDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PollDetails
