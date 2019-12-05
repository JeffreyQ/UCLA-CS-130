import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { heading1Text, heading2Text } from '../../../textMixins'

import NumberScaleResponse from './NumberScaleResponse'
// import SelectAllResponse from './SelectAllResponse'
import ShortAnswerResponse from './ShortAnswerResponse'
import MultipleChoiceResponse from './MultipleChoiceResponse'

class PollResponse extends React.Component {
    
    renderResponseComponent = poll => {    
        switch (poll.form_type) {
            case "numScale":
                return <NumberScaleResponse poll={poll} users={this.props.navigation.getParam('subscribers')}/>
            case "freeResp":
                return <ShortAnswerResponse poll={poll} users={this.props.navigation.getParam('subscribers')}/>
            case "multChoice":
                 return <MultipleChoiceResponse poll={poll} users={this.props.navigation.getParam('subscribers')}/>
            default:
                return null
        }
    }

    render() {
        const { poll } = this.props
        if (!poll) {
          return null
        }
    
        return (
          <View>
            {this.renderResponseComponent(poll)}
          </View>
        )
      }

}

const styles = StyleSheet.create({
    title: {
      ...heading1Text
    },
    pollExpiration: {
      ...heading2Text
    },
    pollDetailsContainer: {
      flex: 1,
      backgroundColor: '#EEEEEE',
      alignItems: 'center'
    }
  })

  const mapStateToProps = (state, ownProps) => {
    const pollId = ownProps.navigation.getParam('pollId')
    const polls = state.Polls.pollResponse
    console.log(polls)
    const poll = polls.find(poll => poll.id === pollId)
  
    return {
      poll
    }
  }

  export default connect(mapStateToProps)(PollResponse)