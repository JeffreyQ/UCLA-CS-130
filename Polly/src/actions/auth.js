import AsyncStorage from '@react-native-community/async-storage'
import { SET_ACCESS_TOKEN, SET_ACCESS_TOKEN_FAILURE, CHECKED_AUTH } from '../constants/auth'

export const checkAuth = () => {
  return async dispatch => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken")
      if (accessToken) {
        return dispatch({
          type: SET_ACCESS_TOKEN,
          accessToken
        })
      } else {
        return dispatch({
          type: CHECKED_AUTH
        })
      }
    } catch (error) {
      return dispatch({
        type: SET_ACCESS_TOKEN_FAILURE,
        error
      })
    }
  }
}

export const setAccessToken = accessToken => {
  return async dispatch => {
    try {
      await AsyncStorage.setItem("accessToken", accessToken)
      dispatch({
        type: SET_ACCESS_TOKEN,
        accessToken
      })
    } catch (error) {
      dispatch({
        type: SET_ACCESS_TOKEN_FAILURE,
        error
      })
    }
  }
}

