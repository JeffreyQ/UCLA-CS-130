import React from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import { heading2Text, bodyText, grayBody } from '../../textMixins'
import { getSubscribers, getSubscribedTo } from '../../actions/user'

import Util from '../../util'

class Heading extends React.Component {
  render(){
    console.log(this.props.me.fbId)
    const imageUrl = Util.getProfilePicUrl(this.props.me.fb_id)
    let numSubscribers = 0
    if(this.props.subscribers){
      numSubscribers = this.props.subscribers.length
    }
    let numSubscribedTo = 0
    if(this.props.subscribedTo){
      numSubscribedTo = this.props.subscribedTo.length
    }
    return (
      <View style={styles.container}>
        <View style={styles.profilePicContainer}>
          <Image source={{uri: imageUrl}} style={styles.profilePic}/>
          <Text style={styles.name}>{this.props.me.name}</Text>
        </View>
        <TouchableHighlight underlayColor={"#fff"} onPress={this.props.subscriberPress}>
          <View style={styles.count}>
            <Text style={{...heading2Text}}>{numSubscribers}</Text>
            <Text style={{...bodyText}}>Pollees</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={"#fff"} onPress={this.props.subscriptionPress}>
          <View style={styles.count}>
            <Text style={{...heading2Text}}>{numSubscribedTo}</Text>
            <Text style={{...bodyText}}>Pollers</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={"#fff"} onPress={this.props.logout}>
          <Text>Log Out</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Heading

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
