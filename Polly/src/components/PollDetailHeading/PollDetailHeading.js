import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { heading1Text, heading2Text, grayBody, bodyText } from '../../textMixins'

class PollDetailHeading extends React.Component {
  renderCloseButton = () => {
    return (
      <View style={styles.closeButton}>
        <Text>Close Now</Text>
      </View>
    )
  }

  renderClosedText = () => {
    return (
      <View>
        <Text style={styles.closeText}>Closed</Text>
      </View>
    )
  }

  render() {
    const { poll } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.textArea}>
          <Text style={{...heading1Text}}>{poll.question}</Text>
          <Text style={{...bodyText, ...grayBody}}>{poll.createdDate}</Text>
        </View>
        <View style={styles.pollCloseOption}>
          {poll.isClosed ? this.renderClosedText() : this.renderCloseButton()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 145,
    borderBottomWidth: 0.4,
    borderBottomColor: '#A5A3A3',
    justifyContent: 'space-around',
    padding: 29
  },
  closeButton: {
    backgroundColor: '#99C2FF',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    borderRadius: 20,
    width: 106,
    height: 29
  },
  textArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeText: {
    justifyContent: 'center',
    ...heading2Text,
    ...grayBody
  },
  pollCloseOption: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default PollDetailHeading
