import {
  POLL_CREATION_FAILURE,
  POLL_CREATION_SUCCESS,
  GET_POLLS_SUBSCRIBED_TO_SUCCESS,
  GET_POLLS_SUBSCRIBED_TO_FAILURE
} from '../constants/polls'

const defaultState = {
  lastPollCreated: -1,
  error: null,
  pollsSubscribedTo: []
}

const Polls = (state = defaultState, action) => {
  switch (action.type) {
    case POLL_CREATION_SUCCESS:
      return {
        ...state,
        lastPollCreated: action.pollID
      }
    case POLL_CREATION_FAILURE:
      return {
        ...state,
        lastPollCreated: -1,
        error: action.error
      }
    case GET_POLLS_SUBSCRIBED_TO_SUCCESS: 
      return {
        ...state,
        pollsSubscribedTo: action.polls
      }
    case GET_POLLS_SUBSCRIBED_TO_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default Polls
