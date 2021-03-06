import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { heading1Text, heading2Text } from '../../../textMixins'

import NumberScalePoll from './NumberScalePoll'
import MultipleChoicePoll from './MultipleChoicePoll'
import TwoChoicePoll from './TwoChoicePoll'
import FreeResponsePoll from './FreeReponsePoll'

class PollDetails extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#EEEEEE',
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
  };
  renderPollComponent = poll => {
    const submitAnswer = this.props.navigation.getParam('submitAnswer')

    switch (poll.form_type) {
      case "numScale":
        return <NumberScalePoll poll={poll} submitAnswer={submitAnswer} />
      case "multChoice":
        const { options } = poll.resp_struct
        if (options.length == 2) {
          return <TwoChoicePoll poll={poll} submitAnswer={submitAnswer} />
        }
        return <MultipleChoicePoll poll={poll} submitAnswer={submitAnswer} />
      case "freeResp":
        return <FreeResponsePoll poll={poll} submitAnswer={submitAnswer} />
    }
  }
  render() {
    const { poll } = this.props
    const {width} = Dimensions.get('window')

    if (!poll) {
      return null
    }

    return (
      <View style={styles.pollDetailsContainer}>
        {this.renderPollComponent(poll)}
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
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center'
  }
})

const mapStateToProps = (state, ownProps) => {
  const pollId = ownProps.navigation.getParam('pollId')
  const polls = state.Polls.pollsSubscribedTo
  const poll = polls.find(poll => poll.id === pollId)

  return {
    poll
  }
}

export default connect(mapStateToProps)(PollDetails)
