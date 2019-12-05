import React from 'react'
import { connect } from 'react-redux'

import { getPollResponse } from '../../actions/polls' 

class ResponseContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.navigation.getParam('poll'))
    this.props.getPollResponse(this.props.navigation.getParam('poll'))
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        navigate(this.props.navigation.getParam('pollType'), 
        {prompt:this.props.navigation.getParam('prompt'), 
        poll: this.props.navigation.getParam('poll')})
    )}
}

const mapDispatchToProps = dispatch => ({
  getPollResponse: pollId => dispatch(getPollResponse(pollId)),
})

export default connect(null, mapDispatchToProps)(ResponseContainer)
