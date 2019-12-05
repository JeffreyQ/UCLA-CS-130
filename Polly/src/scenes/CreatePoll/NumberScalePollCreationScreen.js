import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'
import { theme, styles } from './style'

export default class NumberScalePollCreationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formType: 'numScale',
      prompt: '',
      minLabel: '',
      maxLabel: ''
    }
  }
  
  static navigationOptions = {
    title: 'Number Scale Poll',
  };
  render() {
    createPoll = this.props.navigation.getParam('createPoll')
    const { minLabel, maxLabel } = this.state
    return(
      <ThemeProvider theme={theme}>
        <View style={{padding: 15, flex:1.5}}>
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
        <View style={{padding: 15, flex:1}}>
          <Text style={{fontSize:20, padding: 10}}>Minimum Label</Text>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              style={styles.input}
              onChangeText={minLabel => this.setState({minLabel: String(minLabel)})}
            />
          </View>
          <Text style={{fontSize:20, padding: 10}}>Maximum Label</Text>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              style={styles.input}
              onChangeText={maxLabel => this.setState({maxLabel: String(maxLabel)})}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Button
            style={styles.container}
            title="Create"
            onPress={() => {
              createPoll({
                ...this.state,
                respStruct: {
                  low: minLabel,
                  high: maxLabel
                }
              })
              this.props.navigation.goBack()
            }}
          />
        </View>
      </ThemeProvider>
    );
  }
}
