import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { heading1Text } from '../../../../textMixins'
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

  render() {
    const { poll } = this.props
    const { options } = poll.resp_struct

    return (
      <View style={styles.container}>
        <View style={styles.promptContainer}>
          <Text style={styles.promptText}>{poll.prompt}</Text>
        </View>
        <View>
          <View style={styles.responsesContainer}>
            {options.map((option, i) =>
              <ResponseCard
                option={option}
                answered={i === this.state.selected}
                onClick={() => this.select(i)}
              />
            )}
          </View>
          <Button text={"Submit"} onPress={() => console.log('hello')} />
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
  }
})

export default SelectAllPoll
