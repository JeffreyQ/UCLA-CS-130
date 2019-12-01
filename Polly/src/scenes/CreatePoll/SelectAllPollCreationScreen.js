import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'
import { theme, styles } from './index'

export default class SelectAllPollCreationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formType: 'selectAll',
      prompt: '',
      option1: '',
      option2: '',
      option3: '',
      option4: ''
    }
  }
  
  static navigationOptions = {
    title: 'Select All Poll',
  };
  render() {
    JSONWebToken = this.props.navigation.getParam('JSONWebToken')
    createPoll = this.props.navigation.getParam('createPoll')
    const { option1, option2, option3, option4 } = this.state
    return(
      <ThemeProvider theme={theme}>
        <View style={{padding: 15, flex:1}}>
          <Text style={{fontSize:20, paddingBottom: 10}}>Prompt</Text>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              scrollEnabled={true}
              style={styles.input}
              onChangeText={prompt => this.setState({prompt})}
            />
          </View>
        </View>
        <View style={{padding: 15, flex:2}}>
          <Text style={{fontSize:14, paddingBottom:6}}>Option 1</Text>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              style={styles.optionInput}
              onChangeText={option1 => this.setState({option1})}
            />
          </View>
          <Text style={{fontSize:14, paddingTop: 6, paddingBottom:6}}>Option 2</Text>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              style={styles.optionInput}
              onChangeText={option2 => this.setState({option2})}
            />
          </View>
          <Text style={{fontSize:14, paddingTop: 6, paddingBottom:6}}>Option 3</Text>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              style={styles.optionInput}
              onChangeText={option3 => this.setState({option3})}
            />
          </View>
          <Text style={{fontSize:14, paddingTop: 6, paddingBottom:6}}>Option 4</Text>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              style={styles.optionInput}
              onChangeText={option4 => this.setState({option4})}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Button
            style={styles.container}
            title="Create"
            onPress={() => createPoll({
              ...this.state,
              respStruct: {
                option1: option1,
                option2: option2,
                option3: option3,
                option4: option4
              }
            }, JSONWebToken)}
          />
        </View>
      </ThemeProvider>
    );
  }
}