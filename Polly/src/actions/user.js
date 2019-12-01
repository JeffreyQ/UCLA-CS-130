import * as userConstants from "../constants/user"


export const getUsers = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const { JSONWebToken } = state.Auth

    try {
      const response = await fetch("http://localhost:5000/user", {
        headers: {
          'Authorization': `Bearer ${JSONWebToken}`
        }
      })

      if (response.status != 200) {
        throw new Error("Failed to fetch users")
      }

      return dispatch({
        type: userConstants.FETCH_USERS_SUCCESS,
        users: response.data
      })

    } catch (error) {
      dispatch({
        type: userConstants.FETCH_USERS_FAILURE,
        error
      })
    }
  }
}
export const createInviteRequest = userId => {
  return async (dispatch, getState) => {
    const state = getState()
    const { JSONWebToken } = state.Auth

    try {
      const response = await fetch("http://localhost:5000/user/follow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSONWebToken}`
        },
        body: JSON.stringify({
          id: userId
        })
      })

      if (response.status != 201) {
        throw new Error("Failed to create a follow invitation")
      }

      dispatch({
        type: userConstants.CREATE_INVITE_REQUEST_SUCCESS,
        userId
      })
    } catch (error) {
      dispatch({
        type: userConstants.CREATE_INVITE_REQUEST_FAILURE,
        error
      })
    }
  }
}

