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
      let responseJson = await response.json()
    } catch (error) {
      console.log(error)
    }
  }
}