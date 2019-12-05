import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { heading2Text } from '../../../../textMixins'

class ResponseCard extends React.Component {
  render() {
    const { option, answered, onClick } = this.props
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={answered ?
            styles.responseCardAnsweredContainer :
            styles.responseCardContainer}>
          <View style={answered ?
            styles.answeredCircle :
              styles.circle}>
          </View>
          <Text style={styles.optionText}>{option}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const responseCardContainer = {
  borderRadius: 20,
  height: 62,
  width: 300,
  backgroundColor: '#FFFFFF',
  marginBottom: 23,
  flexDirection: 'row',
  alignItems: 'center'
}

const responseCardAnsweredContainer = {
  ...responseCardContainer,
  borderColor: '#99C2FF',
  borderWidth: 1
}

const circle = {
  height: 24,
  width: 24,
  borderRadius: 50,
  backgroundColor: '#EEEEEE',
  marginLeft: 18
}

const answeredCircle = {
  ...circle,
  backgroundColor: '#99C2FF'
}

const styles = StyleSheet.create({
  responseCardContainer,
  responseCardAnsweredContainer,
  answeredCircle,
  circle,
  optionText: {
    ...heading2Text,
    marginLeft: 26
  }
})

export default ResponseCard
