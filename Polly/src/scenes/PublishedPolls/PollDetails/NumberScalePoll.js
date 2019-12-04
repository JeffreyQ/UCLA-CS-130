import React from 'react'
import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { heading1Text, bodyText, grayBody } from '../../../textMixins'
import { shadowStyle } from '../../../styles'

class NumberScalePoll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0 
    }
  }

  submit = () => {
    const { poll } = this.props
    const answer = {
      option: this.state.value,
      comment: ""
    }
    this.props.submitAnswer(answer, poll.id)
  }

  renderPrompt = () => {
    const { poll } = this.props

    if (poll.responded) {
      return <Text style={styles.respondedText}>You've already responded to this poll</Text>
    }

    return (
      <TouchableHighlight underlayColor={"#fff"} onPress={this.submit}>
        <View style={styles.button}>
          <Text>Submit</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { poll } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.value}</Text>
        <Slider
          style={{width: 200, height: 80}}
          step={1}
          onValueChange={value => this.setState({value})}
          minimumValue={Number(poll.resp_struct.low)}
          maximumValue={Number(poll.resp_struct.high)}
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#000"
        />
        {this.renderPrompt()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
    ...heading1Text
  },
  respondedText: {
    ...bodyText,
    ...grayBody
  },
  button: {
    backgroundColor: '#99C2FF',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    borderRadius: 20,
    width: 106,
    height: 29,
    ...shadowStyle
  }
})

export default NumberScalePoll
