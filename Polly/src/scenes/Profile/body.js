import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { heading1Text, bodyText, grayBody } from '../../textMixins'
import Card from './card'

class ProfileBody extends React.Component {
  render() {
    return (
      <View style={styles.bodyContainer}>
        <View style={styles.heading}>
          <Text style={{...heading1Text}}>My Polls</Text>
          <Text style={{...bodyText, ...grayBody}}>Filter</Text>
        </View>
        <Card />
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  bodyContainer: {
    padding: 20
  },
  heading: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default ProfileBody
