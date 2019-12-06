import React from 'react'
import CreatePoll from './CreatePoll'
import { createPoll } from '../../actions/polls'
import { connect } from 'react-redux'

class CreatePollContainer extends React.Component {
  render() {
    return (
      <CreatePoll screenProps={{createPoll: this.props.createPoll}} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {createPoll: pollData => dispatch(createPoll(pollData))}
}

CreatePollContainer = connect(null, mapDispatchToProps)(CreatePollContainer)

export default CreatePollContainer