import React from 'react'
import { connect } from 'react-redux'

import { getPollsSubscribedTo, submitAnswer, checkRespondedToPoll } from '../../actions/polls'
import { getUsers } from '../../actions/user'
import PublishedPollsScreen from './PublishedPollsScreen'

class PublishedPollsContainer extends React.Component {
  constructor(props) {
    super(props)
    props.getPollsSubscribedTo()
    if (!props.users.length) {
      props.getUsers()
    }
  }

  render() {
    return (
      <PublishedPollsScreen
        pollsSubscribedTo={this.props.pollsSubscribedTo}
        submitAnswer={this.props.submitAnswer}
        checkRespondedToPoll={this.props.checkRespondedToPoll}
        users={this.props.users}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    pollsSubscribedTo: state.Polls.pollsSubscribedTo,
    users: state.User.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPollsSubscribedTo: () => dispatch(getPollsSubscribedTo()),
    submitAnswer: (answer, pollId) => dispatch(submitAnswer(answer, pollId)),
    getUsers: () => dispatch(getUsers()),
    checkRespondedToPoll: pollId => dispatch(checkRespondedToPoll(pollId)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishedPollsContainer)
