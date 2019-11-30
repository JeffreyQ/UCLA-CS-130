import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { heading2Text, bodyText, grayBody } from '../../textMixins'
import { shadowStyle } from '../../styles'

export default props => {
  const { user } = props
  return (
    <View style={styles.container}>
      <View style={styles.profileDetails}>
        <Image source={require('./profile.jpg')} style={styles.image}/>
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 27
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
    justifyContent: 'center',
    ...shadowStyle
  }
})
