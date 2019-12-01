import React from 'react'
import Search from './Search'
import { connect } from 'react-redux'

import { createInviteRequest } from '../../actions/user' 

class SearchContainer extends React.Component {
  render() {
    return (
      <Search
        createInviteRequest={this.props.createInviteRequest}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createInviteRequest: userId => dispatch(createInviteRequest(userId))
})

export default connect(null, mapDispatchToProps)(SearchContainer)
