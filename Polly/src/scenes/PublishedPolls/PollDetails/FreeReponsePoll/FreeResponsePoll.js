import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { withNavigation } from 'react-navigation'

import { heading1Text, bodyText, grayBody } from '../../../../textMixins'
import Button from '../../../../components/Button'

const FreeResponsePoll = props => {
  [comment, setAnswer] = useState("")

  submit = () => {
    const { poll, navigation } = props
    const answer = {
      comment,
      option: 0
    }

    props.submitAnswer(answer, poll.id)
    navigation.goBack()
  }

  renderPrompt = () => {
    const { poll } = props

    if (poll.responded) {
      return <Text style={styles.respondedText}>You've already responded to this poll</Text>
    }

    return (
      <Button text={"Submit"} onPress={submit} />
    )
  }

  const { poll } = props
  const { options } = poll.resp_struct

  return (
    <View style={styles.container}>
      <View style={styles.promptContainer}>
        <Text style={styles.promptText}>{poll.prompt}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.responsesContainer}>
          <TextInput
            multiline
            style={{
              height: 330,
              borderRadius: 20,
              backgroundColor: '#FFFFFF',
              width: 243,
              padding: 30
            }}
            value={comment}
            onChangeText={setAnswer}
           />
        </View>
        {renderPrompt()}
      </View>
    </View>
  )
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
    marginBottom: 42,
    alignItems: 'center'
  },
  respondedText: {
    ...bodyText,
    ...grayBody
  },
})

export default withNavigation(FreeResponsePoll)

