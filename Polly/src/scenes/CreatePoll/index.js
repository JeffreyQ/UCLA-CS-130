import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { ThemeProvider, Button, Input } from 'react-native-elements'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { heading2Text } from '../../textMixins'

class SelectAllPollCreationScreen extends React.Component {
    render() {
        return(
        <View style={{flex: 1, alignItems: 'center'}}> 
          <Text> Select All Poll </Text>
            <TextInput
                placeholder='Prompt'
                multiline={true}
                scrollEnabled={true}
            />
          
            <Button
                title="Next"
                type="solid"
            />
        </View>
        );
    }
}

class ShortAnswerPollCreationScreen extends React.Component {
  render() {
      return(
      <View style={{flex: 1, alignItems: 'center'}}> 
        <Text> Short Answer Poll </Text>
          <TextInput
              placeholder='Prompt'
              multiline={true}
              scrollEnabled={true}
          />
        
          <Button
              title="Next"
              type="solid"
          />
      </View>
      );
  }
}

class NumberScalePollCreationScreen extends React.Component {
  render() {
      return(
      <View style={{flex: 1, alignItems: 'center'}}> 
        <Text> Number Scale Poll </Text>
          <TextInput
              placeholder='Prompt'
              multiline={true}
              scrollEnabled={true}
          />
          <Input
            placeholder='Minimum Value'
          />
          <Input
            placeholder='Maximum Value'
          />
          <Button
              title="Next"
              type="solid"
          />
      </View>
      );
  }
}

class MultipleChoicePollCreationScreen extends React.Component {
  render() {
      return(
        <ThemeProvider theme={theme}>
          <View style={{flex: 1, alignItems: 'center'}}> 
            <Text> Multiple Choice Poll </Text>
              <TextInput
                  placeholder='Prompt'
                  multiline={true}
                  scrollEnabled={true}
              />
              <Input
                  placeholder='Choice 1'
              />
              <Input
                placeholder='Choice 2'
              />
              <Input
                placeholder='Choice 3'
              />
              <Input
                placeholder='Choice 4'
              />
              <Button
                  title="Next"
                  type="solid"
              />
          </View>
        </ThemeProvider>
      );
  }
}


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
              onPress={() => navigate('MultipleChoicePoll', {name: 'Select All'})}
            />
            <Button
              style={styles.container}
              title="Short Answer"
              onPress={() => navigate('ShortAnswerPoll', {name: 'Select All'})}
           />
            <Button
              style={styles.container}
              title="Number Scale"
              onPress={() => navigate('NumberScalePoll', {name: 'Select All'})}
            />
            <Button
              style={styles.container}
              title="Select All"
              onPress={() => navigate('SelectAllPoll', {name: 'Select All'})}
            />
          </View>
        </ThemeProvider>
      );
    }
}

const MainNavigator = createStackNavigator({
    CreatePoll: {screen: CreatePollScreen},
    SelectAllPoll: {screen: SelectAllPollCreationScreen},
    MultipleChoicePoll: {screen: MultipleChoicePollCreationScreen},
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
      fontSize:36
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
  heading2Text: {
    ...heading2Text
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
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
