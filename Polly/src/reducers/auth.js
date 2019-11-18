import { SET_ACCESS_TOKEN, SET_ACCESS_TOKEN_FAILURE, CHECKED_AUTH } from '../constants/auth'

const defaultState = {
  checkedAuth: false,
  accessToken: null,
  error: null
}

const Auth = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        checkedAuth: true,
        accessToken: action.accessToken
      }
    case SET_ACCESS_TOKEN_FAILURE:
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
