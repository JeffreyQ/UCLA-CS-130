import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider, Button } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
import { createPoll } from '../../actions/pollCreation'

class CreatePollScreen extends React.Component {
    static navigationOptions = {
      title: 'Create New Poll',
    };
    render() {
      const {navigate} = this.props.navigation;
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

const theme = {
  Button: {
    containerStyle: {
      margin: 10,
      width: '85%',
    },
    titleStyle: {
      color: 'black',
      fontSize: 36
    },
    buttonStyle: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
    },
    type: 'clear'
  }
}
function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: '#0047FF',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.2,
    shadowRadius: 0.8 * elevation,
  };
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
  return {createPoll: (pollData, JSONWebToken) => dispatch(createPoll(pollData, JSONWebToken))}
}

export default connect(null, mapDispatchToProps)(CreatePollScreen)