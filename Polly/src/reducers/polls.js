import { POLL_CREATION_FAILURE, POLL_CREATION_SUCCESS } from '../constants/polls'

const defaultState = {
  lastPollCreated: -1,
  error: null
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
    default:
      return state
  }
}

export default Polls
