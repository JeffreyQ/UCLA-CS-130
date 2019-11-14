import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

class PollDetails extends React.Component {
  render() {
    const {width} = Dimensions.get('window')
    return (
      <View>
        <View style={{
          width,
          height: width,
          backgroundColor: 'rgba(86, 204, 242, .08)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>{this.props.navigation.getParam('pollId')}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default PollDetails
