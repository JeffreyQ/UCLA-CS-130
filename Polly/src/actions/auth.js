import AsyncStorage from '@react-native-community/async-storage'
import { SET_JSON_WEB_TOKEN, SET_JSON_WEB_TOKEN_FAILURE, CHECKED_AUTH, INVALID_JWT_FAILURE } from '../constants/auth'

export const checkAuth = () => {
  return async dispatch => {
    try {
      const JSONWebToken = await AsyncStorage.getItem("JSONWebToken")
      if (JSONWebToken) {
        return dispatch({
          type: SET_JSON_WEB_TOKEN,
          JSONWebToken
        })
      } else {
        return dispatch({
          type: CHECKED_AUTH
        })
      }
    } catch (error) {
      return dispatch({
        type: SET_JSON_WEB_TOKEN_FAILURE,
        error
      })
    }
  }
}

export const setJSONWebToken = JSONWebToken => {
  return async dispatch => {
    try {
      await AsyncStorage.setItem("JSONWebToken", JSONWebToken)
      return dispatch({
        type: SET_JSON_WEB_TOKEN,
        JSONWebToken
      })
    } catch (error) {
      return dispatch({
        type: SET_JSON_WEB_TOKEN_FAILURE,
        error
      })
    }
  }
}

export const createNewUserRequest = accessToken => {
  return async dispatch => {
    try {
      // TODO: Move fetch endpoint to config file
      let response = await fetch('http://ec2-54-225-3-241.compute-1.amazonaws.com:5000/user/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            accessToken,
          }),
      })
      if (response.status != 201) {
        throw "Unable to create user."
      }
      
      let responseJson = await response.json()
      let JSONWebToken = responseJson.token
      // console.log(JSONWebToken)
      return dispatch(setJSONWebToken(JSONWebToken))
    } catch (error) {
      dispatch({
        type: INVALID_JWT_FAILURE,
        error
      })
    }
  }
}