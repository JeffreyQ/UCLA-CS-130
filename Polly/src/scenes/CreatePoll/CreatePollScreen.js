import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider, Button } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

import { createPoll } from '../../actions/polls'
import { theme, elevationShadowStyle } from './style'


class CreatePollScreen extends React.Component {
    static navigationOptions = {
      title: 'Create New Poll',
    };
    render() {
      const { navigate } = this.props.navigation;
      return(
        <ThemeProvider theme={theme}>
          <View style={styles.view}> 
            <Button
              style={styles.container}
              title="True False"
              onPress={() => navigate('TrueFalsePoll', {name: 'TrueFalse', createPoll: this.props.createPoll})}
            />
            <Button
              style={styles.container}
              title="Short Answer"
              onPress={() => navigate('ShortAnswerPoll', {name: 'ShortAnswer', createPoll: this.props.createPoll})}
           />
            <Button
              style={styles.container}
              title="Number Scale"
              onPress={() => navigate('NumberScalePoll', {name: 'NumberScale', createPoll: this.props.createPoll})}
            />
            <Button
              style={styles.container}
              title="Select All"
              onPress={() => navigate('SelectAllPoll', {name: 'SelectAll', createPoll: this.props.createPoll})}
            />
          </View>
        </ThemeProvider>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    height: 118,
    ...elevationShadowStyle(5)
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    createPoll: pollData => dispatch(createPoll(pollData))
  }
}

export default connect(null, mapDispatchToProps)(CreatePollScreen)
