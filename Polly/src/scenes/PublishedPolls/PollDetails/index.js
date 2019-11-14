import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { heading1Text, heading2Text } from '../../../textMixins'

class PollDetails extends React.Component {
  render() {
    const {width} = Dimensions.get('window')
    return (
      <View>
        <View style={{
          width,
          height: width,
          backgroundColor: 'rgba(86, 204, 242, .08)',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={{height: 150, width: 150}} />
          <Text style={styles.title}>Poll Title</Text>
          <Text style={styles.pollExpiration}>Expires tomorrow</Text>
        </View>
        <View style={styles.pollDetailsContainer}>
          <Text>Poll Details Go Here</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    ...heading1Text
  },
  pollExpiration: {
    ...heading2Text
  },
  pollDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PollDetails
