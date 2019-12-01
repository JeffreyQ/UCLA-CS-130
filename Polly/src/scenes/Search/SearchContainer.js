import React from 'react'
import Search from './Search'
import { connect } from 'react-redux'

import { createInviteRequest, getUsers } from '../../actions/user' 

class SearchContainer extends React.Component {
  constructor(props) {
    super(props)
    props.getUsers()
  }

  render() {
    return (
      <Search
        createInviteRequest={this.props.createInviteRequest}
        users={this.props.users}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.User.users
  }
}

const mapDispatchToProps = dispatch => ({
  createInviteRequest: userId => dispatch(createInviteRequest(userId)),
  getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
