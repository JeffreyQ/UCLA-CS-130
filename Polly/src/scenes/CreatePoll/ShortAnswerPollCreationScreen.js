import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'
import { theme, styles } from './style'

export default class ShortAnswerPollCreationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formType: 'freeResp',
      prompt: '',
      respStruct: { 'reply': '' }
    }
  }
  
  static navigationOptions = {
    title: 'Short Answer Poll',
  };
  
  render() {
    JSONWebToken = this.props.navigation.getParam('JSONWebToken')
    createPoll = this.props.navigation.getParam('createPoll')
    return(
      <ThemeProvider theme={theme}>
        <View style={{padding:15, flex:1}}>
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
        <View style={styles.bottom}>
          <Button
            style={styles.container}
            title="Create"
            onPress={() => createPoll(this.state, JSONWebToken)}
          />
        </View>
      </ThemeProvider>
    );
  }
}