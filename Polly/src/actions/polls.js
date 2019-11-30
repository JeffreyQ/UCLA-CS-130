import { POLL_CREATION_FAILURE, POLL_CREATION_SUCCESS } from '../constants/polls'

export const createPoll = (pollData, JSONWebToken) => {
  return async dispatch => {
    try {
      const { formType, prompt, respStruct } = pollData
      let response = await fetch('http://localhost:5000/poll/', {
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