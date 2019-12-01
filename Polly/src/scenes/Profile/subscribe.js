import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableHighlight, ScrollView } from 'react-native'

import { heading2Text, bodyText, grayBody } from '../../textMixins'


class SubscriptionScreen extends React.Component{

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style ={styles.container}>
            <Text style={{...heading2Text}}> 89 Pollers</Text>
        </View>
      </SafeAreaView>
    )
  }
}

class SubscriberScreen extends React.Component{

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style ={styles.container}>
            <Text style={{...heading2Text}}> 89 Pollees</Text>
        </View>
      </SafeAreaView>
    )
  }
}
export default SubscriptionScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
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
  heading: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bodyContainer: {
    padding: 20
  },
})
export {
  SubscriberScreen,
  SubscriptionScreen,
}
