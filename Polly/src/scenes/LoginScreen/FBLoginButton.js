import React, { Component } from 'react'
import { LoginButton, AccessToken } from 'react-native-fbsdk'

export default class FBLoginButton extends Component {
  render() {
    return (
      <LoginButton
        permissions={["email", "public_profile"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("Login failed with error: " + error.message)
            } else if (result.isCancelled) {
              alert("Login was cancelled")
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                return data.accessToken.toString();
              }).then(accessToken => {
                return this.props.createNewUserRequest(accessToken);
              })
            }
          }
        }
        onLogoutFinished={() => alert("User logged out")}/>
    )
  }
}

