import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'

import { heading2Text, bodyText, grayBody } from '../../textMixins'

export default Card = props => {
  return (
    <TouchableHighlight underlayColor={"#fff"} onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={{...heading2Text}}>{props.poll.prompt}</Text>
      </View>
    </TouchableHighlight>
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
    height: 58,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
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
