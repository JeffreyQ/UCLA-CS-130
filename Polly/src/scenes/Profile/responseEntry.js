import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { heading2Text, bodyText, grayBody } from '../../textMixins'

export default ResponseEntry = props => {
  const { user } = props
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('./profile.jpg')} style={styles.image} />
        <Text>{user.name}</Text>
        <Text>{user.response}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between'
    },
    image: {
      height: 30,
      width: 30,
      borderRadius: 30
    },
    name: {
      ...heading2Text
    },
  })