import React from 'react'
import {connect} from 'react-redux'

import {getSubscribers, getSubscribedTo} from '../../actions/user'
import {getMyPolls, getPollResponse} from '../../actions/polls'
import { logout } from '../../actions/auth'
import ProfileScreen from './ProfileScreen'

class ProfileContainer extends React.Component{
    constructor(props){
        super(props)
        props.getSubscribers()
        props.getSubscribedTo()
        props.getMyPolls()
    }

    render() {
      return(
        <ProfileScreen
            subscribers={this.props.subscribers}
            subscribedTo={this.props.subscribedTo}
            myPolls={this.props.myPolls}
            getPollResponse={this.props.getPollResponse}
            pollResponse={this.props.pollResponse}
            logout={this.props.logout}
        />
      )
    }
}


const mapStateToProps = state => {
    return {
      subscribers: state.User.subscribers,
      subscribedTo: state.User.subscribedTo,
      myPolls: state.Polls.myPolls,
      pollResponse: state.Polls.pollResponse
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getSubscribers: () => dispatch(getSubscribers()),
      getSubscribedTo: () => dispatch(getSubscribedTo()),
      getMyPolls: () => dispatch(getMyPolls()),
      getPollResponse: pollId => dispatch(getPollResponse(pollId)),
      logout: () => dispatch(logout())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)