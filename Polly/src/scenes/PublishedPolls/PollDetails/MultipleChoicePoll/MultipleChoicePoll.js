import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

import { heading1Text, bodyText, grayBody } from '../../../../textMixins'
import ResponseCard from './ResponseCard'
import Button from '../../../../components/Button'

class SelectAllPoll extends React.Component {
  state = {
    selected: -1
  }

  select = idx => {
    this.setState({
      selected: idx
    })
  }

  submit = () => {
    const { poll, navigation } = this.props
    const { options } = poll.resp_struct
    const answer = {
      option: this.state.selected,
      comment: options[this.state.selected]
    }

    this.props.submitAnswer(answer, poll.id)
    navigation.goBack()
  }

  renderPrompt = () => {
    const { poll } = this.props

    if (poll.responded) {
      return <Text style={styles.respondedText}>You've already responded to this poll</Text>
    }

    return (
      <Button text={"Submit"} onPress={this.submit} />
    )
  }

  render() {
    const { poll } = this.props
    const { options } = poll.resp_struct

    return (
      <View style={styles.container}>
        <View style={styles.promptContainer}>
          <Text style={styles.promptText}>{poll.prompt}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.responsesContainer}>
            {options.map((option, i) =>
              <ResponseCard
                option={option}
                answered={i === this.state.selected}
                onClick={() => this.select(i)}
              />
            )}
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
    marginTop: 50,
    alignItems: 'center'
  },
  respondedText: {
    ...bodyText,
    ...grayBody
  },
})

export default withNavigation(SelectAllPoll)
