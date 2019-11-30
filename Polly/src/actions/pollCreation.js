export const createPoll = (pollData, JSONWebToken) => {
  console.log('asdf1234')
  return async dispatch => {
    try {
      const { formType, prompt, respStruct } = pollData
      let response = await fetch('http://localhost:5000/poll/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSONWebToken,
          "resp_struct": respStruct
        },
        body: JSON.stringify({
          "form_type": formType,
          "prompt": prompt
        }),
      })
      let responseJson = await response.json()
    } catch (error) {
      console.log(error)
    }
  }
}