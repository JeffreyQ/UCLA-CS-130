import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Button from '../../../../components/Button'
import { heading1Text, heading2Text, bodyText, grayBody } from '../../../../textMixins'

class TwoChoicePoll extends React.Component {
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

  select = answer => {
    this.setState({ answer })
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
    const { answer } = this.state
    console.log(answer)

    return (
      <View style={styles.container}>
        <View style={styles.promptContainer}>
          <Text style={styles.promptText}>{poll.prompt}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.responsesContainer}>
            <TouchableOpacity onPress={() => this.select(true)}>
              <View style={answer === true ?
                  styles.answerSelectedContainer : 
                  styles.answerContainer}>
                <Text style={styles.answerText}>TRUE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.select(false)}>
              <View style={answer === false ?
                  styles.answerSelectedContainer : 
                  styles.answerContainer}>
                <Text style={styles.answerText}>FALSE</Text>
              </View>
            </TouchableOpacity>
          </View>
          {this.renderPrompt()}
        </View>
      </View>
    )
  }
}
const answerContainer = {
  height: 175,
  width: 134,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  margin: 8
}

const answerSelectedContainer = {
  ...answerContainer,
  borderWidth: 1,
  borderColor: '#99C2FF'
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
    marginBottom: 23
  },
  answerContainer,
  answerSelectedContainer,
  respondedText: {
    ...bodyText,
    ...grayBody
  },
  answerText: {
    ...heading2Text
  }
})

export default TwoChoicePoll
