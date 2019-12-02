import React from 'react'
import { connect } from 'react-redux'

import { getPollsSubscribedTo } from '../../actions/polls'
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
    getPollsSubscribedTo: () => dispatch(getPollsSubscribedTo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishedPollsContainer)
