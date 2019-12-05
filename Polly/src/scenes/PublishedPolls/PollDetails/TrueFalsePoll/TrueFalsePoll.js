import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Button from '../../../../components/Button'
import { heading1Text, bodyText, grayBody } from '../../../../textMixins'

class TrueFalsePoll extends React.Component {
  state = {
    answer: null
  }

  submit = () => {
    const { poll } = this.props
    const answer = {
      option: this.state.answer ? 1 : 0
    }

    this.props.submitAnswer(answer, poll.id)
  }

  renderPrompt = () => {
    const { poll } = this.props
    if (poll.responded) {
      return <Text style={styles.respondedText}>You've already responded to this poll</Text>
    }

    return <Button text={"Submit"} onPress={this.submit} />
  }

  render() {
    const { poll } = this.props
    console.log(poll)
    return (
      <View style={styles.container}>
        <View style={styles.promptContainer}>
          <Text style={styles.promptText}>{poll.prompt}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.responsesContainer}>
            <View style={styles.answerContainer}>
              <Text>TRUE</Text>
            </View>
            <View style={styles.answerContainer}>
              <Text>FALSE</Text>
            </View>
          </View>
          {this.renderPrompt()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  promptContainer: {
    marginTop: 50,
  },
  promptText: {
    ...heading1Text
  },
  responsesContainer: {
    flexDirection: 'row',
    margin: 8
  },
  answerContainer: {
    height: 175,
    width: 134,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  respondedText: {
    ...bodyText,
    ...grayBody
  },
})

export default TrueFalsePoll
