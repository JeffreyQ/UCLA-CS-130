import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import FBLoginButton from './FBLoginButton'
import { heading1Text } from '../../textMixins'
import { setJSONWebToken } from '../../actions/auth'

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heroContainer} />
        <Text style={styles.welcomeText}>Welcome To Polly!</Text>
        <FBLoginButton setJSONWebToken={this.props.setJSONWebToken}/>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setJSONWebToken: JSONWebToken => dispatch(setJSONWebToken(JSONWebToken))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  heroContainer: {
    width: 306,
    height: 452,
    backgroundColor: '#C4C4C4',
    borderRadius: 20
  },
  welcomeText: {
    ...heading1Text
  }
})

export default connect(null, mapDispatchToProps)(LoginScreen)
