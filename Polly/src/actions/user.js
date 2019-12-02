import * as userConstants from "../constants/user"


export const getUsers = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const { JSONWebToken } = state.Auth

    headers = {
        'Authorization': `Bearer ${JSONWebToken}`
    }
    try {
      const response = await fetch("http://localhost:5000/user/", {
        headers
      })

      if (response.status != 200) {
        console.log(await response.json())
        throw new Error("Failed to fetch users")
      }

      const json = await response.json()

      return dispatch({
        type: userConstants.FETCH_USERS_SUCCESS,
        users: json.data
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

export const getSubscribers = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const { JSONWebToken } = state.Auth

    headers = {
      'Authorization': `Bearer ${JSONWebToken}`
    }
    try {
      const response = await fetch("http://localhost:5000/user/me/subscribers", {
        headers
      })

      const json = await response.json()

      dispatch({
        type: userConstants.GET_SUBSCRIBERS_SUCCESS,
        users:json.data
      })
    } catch (error) {
      dispatch({
        type: userConstants.GET_SUBSCRIBERS_FAILURE,
        error
      })
    }
  }
}

export const getSubscribedTo = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const { JSONWebToken } = state.Auth

    headers = {
      'Authorization': `Bearer ${JSONWebToken}`
    }
    try {
      const response = await fetch("http://localhost:5000/user/me/subscribedto", {
        headers
      })

      const json = await response.json()

      dispatch({
        type: userConstants.GET_SUBSCRIBEDTO_SUCCESS,
        users:json.data
      })
    } catch (error) {
      dispatch({
        type: userConstants.GET_SUBSCRIBEDTO_FAILURE,
        error
      })
    }
  }
}