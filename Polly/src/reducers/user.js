// @flow

import { CREATE_INVITE_REQUEST_SUCCESS, CREATE_INVITE_REQUEST_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, GET_SUBSCRIBERS_SUCCESS, GET_SUBSCRIBERS_FAILURE,GET_SUBSCRIBEDTO_SUCCESS,GET_SUBSCRIBEDTO_FAILURE} from '../constants/user'
import { ActionSheetIOS, ActivityIndicatorComponent } from 'react-native';

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

type GetSubscribersSuccessAction = {
  type: typeof GET_SUBSCRIBERS_SUCCESS,
  subscribers: Array<Other>
}

type GetSubscribersFailureAction = {
  type: typeof GET_SUBSCRIBERS_FAILURE,
  error: Error
}

type GetSubscribedToSuccessAction = {
  type: typeof GET_SUBSCRIBEDTO_SUCCESS,
  subscribedTo: Array<Other>
}

type GetSubscribedToFailureAction = {
  type: typeof GET_SUBSCRIBEDTO_FAILURE,
  error: Error
}

type Action =
  | CreateInviteRequestFailureAction
  | CreateInviteRequestSuccessAction
  | FetchUserSuccessAction
  | FetchUserFailureAction
  | GetSubscribersSuccessAction
  | GetSubscribersFailureAction
  | GetSubscribedToSuccessAction
  | GetSubscribedToFailureAction

const defaultState: State = {
  me: {},
  users: [],
  subscribed: [],
  subscribers: [],
  error: null
}

const User = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS: {
      const users = action.users
      return {
        ...state,
        users: action.users.map(user => {
          const newUser = {
            ...user,
            relationshipStatus: user.relationship_status
          }
          delete newUser['relationship_status']
          return newUser
        })
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
    case GET_SUBSCRIBERS_SUCCESS: {
      return {
        ...state,
        subscribers: action.users,
      }
    }
    case GET_SUBSCRIBERS_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    case GET_SUBSCRIBEDTO_SUCCESS: {
      const users = action.users
      return {
        ...state,
        subscribed: action.users
      }
    }
    case GET_SUBSCRIBEDTO_FAILURE: {
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
