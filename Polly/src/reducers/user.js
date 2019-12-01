// @flow

import { CREATE_INVITE_REQUEST_SUCCESS, CREATE_INVITE_REQUEST_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from '../constants/user'

type Me = {
  id: number,
  email: string,
  name: string,
  fbId: string
}

type Other = Me & {
  relationshipStatus: string
}

type State = {
  me: Me,
  users: Array<Other>,
  error: Error | null
}

type CreateInviteRequestSuccessAction = {
  type: typeof CREATE_INVITE_REQUEST_SUCCESS,
  userId: number
}

type CreateInviteRequestFailureAction = {
  type: typeof CREATE_INVITE_REQUEST_FAILURE,
  error: Error
}

type FetchUserSuccessAction = {
  type: typeof FETCH_USERS_SUCCESS,
  users: Array<Other>
}

type FetchUserFailureAction = {
  type: typeof FETCH_USERS_FAILURE,
  error: Error
}

type Action =
  | CreateInviteRequestFailureAction
  | CreateInviteRequestSuccessAction
  | FetchUserSuccessAction
  | FetchUserFailureAction

const defaultState: State = {
  me: {},
  users: [],
  error: null
}

const User = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS: {
      const users = action.users
      return {
        ...state,
        users
      }
    }
    case FETCH_USERS_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    case CREATE_INVITE_REQUEST_SUCCESS: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user,
              relationshipStatus: "Request Sent"
            }
          }
          return user
        })
      }
    }
    case CREATE_INVITE_REQUEST_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    default:
      (action: empty)
      return state
  }
}

export default User
