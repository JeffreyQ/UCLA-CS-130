import {
  POLL_CREATION_FAILURE,
  POLL_CREATION_SUCCESS,
  GET_POLLS_SUBSCRIBED_TO_SUCCESS,
  GET_POLLS_SUBSCRIBED_TO_FAILURE,
  GET_MY_POLLS_SUCCESS,
  GET_MY_POLLS_FAILURE,
  GET_POLL_RESPONSE_SUCCESS,
  GET_POLL_RESPONSE_FAILURE,
  CHECK_RESPONDED_TO_POLL_SUCCESS,
  CHECK_RESPONDED_TO_POLL_FAILURE,
  ANSWER_POLL_SUCCESS,
  ANSWER_POLL_FAILURE
} from '../constants/polls'

const defaultState = {
  lastPollCreated: -1,
  error: null,
  pollsSubscribedTo: [],
  myPolls:[],
  pollResponse: []
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

    case GET_MY_POLLS_SUCCESS:
      return {
        ...state,
        myPolls: action.polls
      }
    case GET_MY_POLLS_FAILURE:
      return {
        ...state,
        error: action.error
      }

    case ANSWER_POLL_SUCCESS:
    case CHECK_RESPONDED_TO_POLL_SUCCESS:
      const newPolls = state.pollsSubscribedTo.map(poll => {
      if (poll.id === action.pollId) {
          return {
            ...poll,
            responded: action.responded
          }
        }

        return {
          ...poll
        }
      })
    return {
      ...state,
      pollsSubscribedTo: newPolls
    }

    case CHECK_RESPONDED_TO_POLL_FAILURE:
      return {
        ...state,
        error: action.error
      }
    
    case GET_POLL_RESPONSE_SUCCESS:
      const respPolls = state.myPolls.map(poll =>  {
        if(poll.id === action.pollId) {
          return {
            ...poll,
            ...action.responses
          }
        }
        return{
          ...poll
        }
      })
      return{
        ...state,
        myPolls: respPolls
        
      }
    
    case GET_POLL_RESPONSE_FAILURE:    
      return{
        ...state,
        error: action.error
      }
    
    case ANSWER_POLL_FAILURE:
    case CHECK_RESPONDED_TO_POLL_FAILURE: 
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default Polls
