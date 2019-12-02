import {
  POLL_CREATION_FAILURE,
  POLL_CREATION_SUCCESS,
  GET_POLLS_SUBSCRIBED_TO_SUCCESS,
  GET_POLLS_SUBSCRIBED_TO_FAILURE,
  ANSWER_POLL_SUCCESS,
  ANSWER_POLL_FAILURE
} from '../constants/polls'

export const createPoll = pollData => {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const { JSONWebToken } = state.Auth
      const { formType, prompt, respStruct } = pollData
      let response = await fetch('http://localhost:5000/poll/', {
        // let response = await fetch('http://ec2-54-225-3-241.compute-1.amazonaws.com:5000/poll/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSONWebToken
        },
        body: JSON.stringify({
          "form_type": formType,
          "prompt": prompt,
          "resp_struct": respStruct
        }),
      })
      if (response.status != 201) {
        console.log(response.json())
        throw "Unable to create poll."
      }
      
      let responseJson = await response.json()
      let pollID = responseJson.id
      return dispatch({
        type: POLL_CREATION_SUCCESS,
        pollID
      })
    } catch (error) {
      return dispatch({
        type: POLL_CREATION_FAILURE,
        error
      })
    }
  }
}

export const getPollsSubscribedTo = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const { JSONWebToken } = state.Auth

      const response = await fetch('http://localhost:5000/poll/following', {
        headers: {
          'Authorization': `Bearer ${JSONWebToken}`
        }
      })

      if (response.status != 200) {
        throw new Error("Failed to get polls subscribed to")
      }

      const polls = await response.json()

      return dispatch({
        type: GET_POLLS_SUBSCRIBED_TO_SUCCESS,
        polls
      })
    } catch (error) {
      dispatch({
        type: GET_POLLS_SUBSCRIBED_TO_FAILURE,
        error
      })
    } 
  }
}

export const submitAnswer = (answer, pollId) => {
  return async (dispatch, getState) => {
    const state = getState()
    const { JSONWebToken } = state.Auth
    try {
      const response = await fetch(`http://localhost:5000/poll/response/${pollId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSONWebToken}`
        },
        body: JSON.stringify(answer)
      })

      if (response.status != 201) {
        throw new Error("Failed to submit answer")
      }

      return dispatch({
        type: ANSWER_POLL_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: ANSWER_POLL_FAILURE,
        error
      }) 
    }
  }
}
