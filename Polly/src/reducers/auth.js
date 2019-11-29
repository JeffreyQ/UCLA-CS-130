import { SET_JSON_WEB_TOKEN, SET_JSON_WEB_TOKEN_FAILURE, CHECKED_AUTH } from '../constants/auth'

const defaultState = {
  checkedAuth: false,
  JSONWebToken: null,
  error: null
}

const Auth = (state = defaultState, action) => {
  switch (action.type) {
    case SET_JSON_WEB_TOKEN:
      return {
        ...state,
        checkedAuth: true,
        JSONWebToken: action.JSONWebToken
      }
    case SET_JSON_WEB_TOKEN_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case CHECKED_AUTH:
      return {
        ...state,
        checkedAuth: true
      }
    default: return state
  }
}

export default Auth
