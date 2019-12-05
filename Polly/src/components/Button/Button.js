import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#99C2FF',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    borderRadius: 20,
    height: 29,
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default Button
