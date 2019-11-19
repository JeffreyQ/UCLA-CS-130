import React from 'react'
import { Text, View } from 'react-native'
import PollDetailHeading from '../../components/PollDetailHeading'

const dummyPoll = {
  question: "What should I wear?",
  isClosed: true,
  createdDate: "2 Days ago"
}

class PollResponse extends React.Component {
  render() {
    return (
      <View>
        <PollDetailHeading poll={dummyPoll} /> 
        <Text>Some Junk</Text>
      </View>
    )
  }
}

export default PollResponse
