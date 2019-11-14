import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { heading2Text, grayBody } from '../../textMixins'

export default Card = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text>Image</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.heading2Text}>{props.poll.question}</Text>
        <View style={styles.infoDetailContainer}>
          <Text style={styles.pollCreator}>{props.poll.owner}</Text>
          <Text>Expires: {props.poll.expiration}</Text>
          <Text>{props.poll.answers}</Text>
        </View>
      </View>
    </View>
  )
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: '#0047FF',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation,
    shadowOpacity: 0.12
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 28,
    backgroundColor: 'white',
    height: 118,
    padding: 7,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    ...elevationShadowStyle(5)
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  heading2Text: {
    ...heading2Text
  },
  pollCreator: {
    ...grayBody
  }
})
