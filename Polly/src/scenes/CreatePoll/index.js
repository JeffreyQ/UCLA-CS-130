import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { ThemeProvider, Button, Input } from 'react-native-elements'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { heading2Text } from '../../textMixins'
import CreatePollScreen from './CreatePollScreen'

class SelectAllPollCreationScreen extends React.Component {
  static navigationOptions = {
    title: 'Select All Poll',
  };
  render() {
      return(
        <ThemeProvider theme={theme}>
          <View style={{padding: 15, flex:1}}>
            <Text style={{fontSize:20, paddingBottom: 10}}>Prompt</Text>
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                scrollEnabled={true}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{padding: 15, flex:2}}>
            <Text style={{fontSize:14, paddingBottom:6}}>Option 1</Text>
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                style={styles.optionInput}
              />
            </View>
            <Text style={{fontSize:14, paddingTop: 6, paddingBottom:6}}>Option 2</Text>
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                style={styles.optionInput}
              />
            </View>
            <Text style={{fontSize:14, paddingTop: 6, paddingBottom:6}}>Option 3</Text>
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                style={styles.optionInput}
              />
            </View>
            <Text style={{fontSize:14, paddingTop: 6, paddingBottom:6}}>Option 4</Text>
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                style={styles.optionInput}
              />
            </View>
          </View>
          <View style={styles.bottom}>
            <Button
              style={styles.container}
              title="Create"
            />
          </View>
        </ThemeProvider>
      );
  }
}

class ShortAnswerPollCreationScreen extends React.Component {
  static navigationOptions = {
    title: 'Short Answer Poll',
  };
  render() {
      return(
        <ThemeProvider theme={theme}>
          <View style={{padding:15, flex:1}}>
            <Text style={{fontSize:20, paddingBottom: 10}}>Prompt</Text>
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                scrollEnabled={true}
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.bottom}>
            <Button
              style={styles.container}
              title="Create"
            />
          </View>
        </ThemeProvider>
      );
  }
}

class NumberScalePollCreationScreen extends React.Component {
  static navigationOptions = {
    title: 'Number Scale Poll',
  };
  render() {
      return(
        <ThemeProvider theme={theme}>
          <View style={{padding: 15, flex:1.5}}>
            <Text style={{fontSize:20, paddingBottom: 10}}>Prompt</Text>
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                scrollEnabled={true}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{padding: 15, flex:1}}>
            <Text style={{fontSize:20, padding: 10}}>Minimum Label</Text>
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                style={styles.input}
              />
            </View>
            <Text style={{fontSize:20, padding: 10}}>Maximum Label</Text>
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.bottom}>
            <Button
              style={styles.container}
              title="Create"
            />
          </View>
        </ThemeProvider>
      );
  }
}

class TrueFalsePollCreationScreen extends React.Component {
  static navigationOptions = {
    title: 'True False Poll',
  };
  render() {
    return(
      <ThemeProvider theme={theme}>
        <View style={{padding:15, flex:1}}>
          <Text style={{fontSize:20, paddingBottom: 10}}>Prompt</Text>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              scrollEnabled={true}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Button
            style={styles.container}
            title="Create"
            onPress={this.props.navigation.getParam('otherParam')}
          />
        </View>
      </ThemeProvider>
    );
  }
}

const MainNavigator = createStackNavigator({
    CreatePoll: {screen: CreatePollScreen},
    SelectAllPoll: {screen: SelectAllPollCreationScreen},
    TrueFalsePoll: {screen: TrueFalsePollCreationScreen},
    NumberScalePoll: {screen: NumberScalePollCreationScreen},
    ShortAnswerPoll: {screen: ShortAnswerPollCreationScreen},
});

export default createAppContainer(MainNavigator)

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
  inputContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#DDDDDD',
    height: 30,
    flex: 1,
    padding: 5
  },
  input: {
    flexDirection: 'row',
    flex: 1,
  },
  optionInput: {
    height: 30
  },
  container: {
    height: 118,
    ...elevationShadowStyle(5)
  },
  heading2Text: {
    ...heading2Text
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 15
  },
  boxWithShadow: {
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 10
  },
  text: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 36
  },
  button: {
    height: 118,
    width: 303,
    left: 36,
    top: 77
  }
});
