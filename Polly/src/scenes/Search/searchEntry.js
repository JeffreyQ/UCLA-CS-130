import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { heading2Text, bodyText, grayBody } from '../../textMixins'

export default props => {
  const { user } = props
  return (
    <View>
      <View style={styles.profileDetails}>
        <Image src={{uri: user.image}} style={styles.image}/>
        <Text>{user.name}</Text>
      </View>
      { user.status ? <Text style={styles.statusText}>{user.status}</Text> : 
      <View style={styles.addButton}>
        <Text>Add</Text>
      </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  profileDetails: {
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  name: {
    ...heading2Text
  },
  statusText: {
    ...grayBody,
    ...bodyText
  },
  addButton: {
    borderRadius: 20,
    backgroundColor: '#99C2FF',
    height: 29,
    width: 53,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
