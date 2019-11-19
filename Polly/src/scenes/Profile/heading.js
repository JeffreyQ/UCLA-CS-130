import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { heading2Text, bodyText, grayBody } from '../../textMixins'

export default Heading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
        <Image source={require('./profile.jpg')} style={styles.profilePic}/>
        <Text style={styles.name}>Stephanie</Text>
      </View>
      <View style={styles.count}>
        <Text style={{...heading2Text}}>89</Text>
        <Text style={{...bodyText}}>Pollees</Text>
      </View>
      <View style={styles.count}>
        <Text style={{...heading2Text}}>89</Text>
        <Text style={{...bodyText}}>Pollers</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 29,
    paddingRight: 29,
    height: 170,
    borderBottomWidth: 0.4,
    borderBottomColor: '#A5A3A3'
  },
  profilePicContainer: {
    alignItems: 'center'
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    ...bodyText,
    marginTop: 6
  },
  count: {
    alignItems: 'center'
  }
})
