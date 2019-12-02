import React from 'react'
import SubscriberScreen from './subscriberScreen'
import { connect } from 'react-redux'

import { getSubscribers } from '../../actions/user' 

class SubscriberContainer extends React.Component {
  constructor(props) {
    super(props)
    props.getSubscribers()
  }

  render() {
    return (
      <SubscriberScreen
        users={this.props.subscribers}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    subscribers: state.User.subscribers
  }
}

const mapDispatchToProps = dispatch => ({
  getSubscribers: () => dispatch(getSubscribers())
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriberContainer)
