import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { heading1Text, bodyText, grayBody } from '../../textMixins'

export default Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Polls</Text>
      <Text style={styles.filter}>Filter</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  heading: {
    ...heading1Text,
  },
  filter: {
    ...grayBody,
    ...bodyText
  }
})
