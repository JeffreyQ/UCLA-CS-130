import * as userConstants from "../constants/user"

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
        type: userConstants.CREATE_INVITE_REQUEST_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: userConstants.CREATE_INVITE_REQUEST_FAILURE,
        error
      })
    }
  }
}

