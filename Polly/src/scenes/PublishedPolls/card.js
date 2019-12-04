import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight, Image, Dimensions } from 'react-native'

import { heading2Text, grayBody } from '../../textMixins'
import Util from '../../util'

export default Card = props => {
  if (!props.user) {
    return null
  }

  const imageUrl = Util.getProfilePicUrl(props.user.fbId)
  return (
    <TouchableHighlight underlayColor={"#fff"} onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: imageUrl}} style={styles.imageStyle} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.heading2Text}>{props.poll.prompt}</Text>
          <View style={styles.infoDetailContainer}>
            {props.user ? <Text style={styles.pollCreator}>{props.user.name}</Text> : null}
          </View>
        </View>
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
  imageStyle: {
    borderRadius: 50,
    height: 110,
    width: 110,
    position: 'relative',
    left: -8
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
