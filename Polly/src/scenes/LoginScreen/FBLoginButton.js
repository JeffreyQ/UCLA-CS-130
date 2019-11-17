import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { LoginButton } from 'react-native-fbsdk'

export default class FBLoginButton extends Component {
  render() {
    return (
      <LoginButton
        publishPermissions={["email"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("Login failed with error: " + error.message)
            } else if (result.isCancelled) {
              alert("Login was cancelled")
            } else {
              alert("Login was successful with permissions: " + result.grantedPermissions)
            }
          }
        }
        onLogoutFinished={() => alert("User logged out")}/>
    )
  }
}

