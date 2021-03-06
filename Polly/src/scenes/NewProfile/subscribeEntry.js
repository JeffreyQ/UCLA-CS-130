import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { heading2Text, bodyText, grayBody } from '../../textMixins'
import Util from '../../util'


export default SubscribeEntry = props => {
  const { user } = props
  console.log(user)
  const imageUrl = (Util.getProfilePicUrl(props.users.find(u => props.user_id == u.id).fbId))
  return (
    <View>
      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <Text>{user.name}</Text>
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