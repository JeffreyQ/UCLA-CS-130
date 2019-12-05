import React from 'react'
import { connect } from 'react-redux'

import { getPollResponse } from '../../actions/polls' 
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import NumberScaleResponseScreen from './numberScaleResponse'
import TrueFalseResponseScreen from './trueFalseResponseScreen'
import SelectAllResponseScreen from './selectAllResponse'
import ShortAnswerResponseScreen from './shortAnswerResponse'

class ResponseContainer extends React.Component {
  getResponseRender=(param)=>{
    const getPollResponse = this.props.navigation.getParam('getPollResponse')
    switch(param) {
      case 'TrueFalseResponseScreen':
        return <TrueFalseResponseScreen 
            prompt={poll.prompt}  
            poll={poll} 
            getPollResponse={getPollResponse}/>;
      
      case 'SelectAllResponseScreen':
        return <SelectAllResponseScreen 
        prompt={poll.prompt}  
        poll={poll}
        getPollResponse={getPollResponse}/>;
        break;
 
      case 'ShortAnswerResponseScreen':
        <ShortAnswerResponseScreen 
        prompt={poll.prompt}  
        poll={poll}
        getPollResponse={getPollResponse} />;
        break;
 
      case 'NumberScaleResponseScreen':
        return <NumberScaleResponseScreen 
        prompt={poll.prompt}  
        poll={poll} 
        getPollResponse={getPollResponse}/>;
        break;
 
      default:
        return <NumberScaleResponseScreen 
        prompt={poll.prompt}  
        poll={poll}
        getPollResponse={getPollResponse} />;
    
      }
 
  }

  render() {
    return (
        <View>
            {this.getResponseRender(poll)}
        </View>
    )}
}

const mapStateToProps = (state, ownProps) => {
  const pollId = ownProps.navigation.getParam('pollId')
  const polls = state.Polls.myPolls
  const poll = polls.find(poll => poll.id === pollId)

  return {
    poll
  }
}

export default connect(mapStateToProps)(ResponseContainer)
