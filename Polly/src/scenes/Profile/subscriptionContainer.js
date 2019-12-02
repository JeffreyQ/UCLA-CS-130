import React from 'react'
import SubscriptionScreen from './subscriptionScreen'
import { connect } from 'react-redux'

import { getSubscribedTo } from '../../actions/user' 

class SubscriptionContainer extends React.Component {
  constructor(props) {
    super(props)
    props.getSubscribedTo()
  }

  render() {
    return (
      <SubscriptionScreen
        users={this.props.subscribed}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    subscribed: state.User.subscribed
  }
}

const mapDispatchToProps = dispatch => ({
  getSubscribedTo: () => dispatch(getSubscribedTo())
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionContainer)
