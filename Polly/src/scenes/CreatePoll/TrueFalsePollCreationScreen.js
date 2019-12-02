import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'
import { theme, elevationShadowStyle } from './style'

export default class TrueFalsePollCreationScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formType: 'multChoice',
      prompt: '',
      respStruct: { 'choice': '' }
    }
  }
  
  static navigationOptions = {
    title: 'True False Poll',
  };
  render() {
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
            onPress={() => {
              createPoll(this.state)
              this.props.navigation.goBack()
            }}
          />
        </View>
      </ThemeProvider>
    );
  }
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
  container: {
    height: 118,
    ...elevationShadowStyle(5)
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 15
  }
});
