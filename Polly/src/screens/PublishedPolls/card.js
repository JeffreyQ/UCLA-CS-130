import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default Card = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text>Image</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>{props.poll.question}</Text>
        <Text>{props.poll.owner}</Text>
        <Text>{props.poll.expiration}</Text>
        <Text>{props.poll.answers}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1
  },
  infoContainer: {
    flex: 2,
    flexDirection: 'column'
  }
})
