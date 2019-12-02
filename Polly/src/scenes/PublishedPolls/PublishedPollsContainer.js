import React from 'react'
import { connect } from 'react-redux'

import { getPollsSubscribedTo, submitAnswer } from '../../actions/polls'
import PublishedPollsScreen from './PublishedPollsScreen'

class PublishedPollsContainer extends React.Component {
  constructor(props) {
    super(props)
    props.getPollsSubscribedTo()
  }

  render() {
    return (
      <PublishedPollsScreen
        pollsSubscribedTo={this.props.pollsSubscribedTo}
        submitAnswer={this.props.submitAnswer}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    pollsSubscribedTo: state.Polls.pollsSubscribedTo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPollsSubscribedTo: () => dispatch(getPollsSubscribedTo()),
    submitAnswer: (answer, pollId) => dispatch(submitAnswer(answer, pollId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishedPollsContainer)
