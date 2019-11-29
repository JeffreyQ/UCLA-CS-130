import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk'


function createNewUserRequest(accessToken, props) {
  return fetch('http://localhost:5000/user/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "accessToken": accessToken,
    }),
  }).then((response) => response.json())
    .then((responseJson) => responseJson.token)
    .then((jsonWebToken) => props.setJSONWebToken(jsonWebToken))
    .catch((error) => {
      console.error(error);
    });
}

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
                return createNewUserRequest(accessToken, this.props);
              })
            }
          }
        }
        onLogoutFinished={() => alert("User logged out")}/>
    )
  }
}

