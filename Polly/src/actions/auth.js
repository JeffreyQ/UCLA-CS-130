import AsyncStorage from '@react-native-community/async-storage'
import { SET_JSON_WEB_TOKEN, SET_JSON_WEB_TOKEN_FAILURE, CHECKED_AUTH } from '../constants/auth'

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
      dispatch({
        type: SET_JSON_WEB_TOKEN,
        JSONWebToken
      })
    } catch (error) {
      dispatch({
        type: SET_JSON_WEB_TOKEN_FAILURE,
        error
      })
    }
  }
}

export const createNewUserRequest = (accessToken, props) => {
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