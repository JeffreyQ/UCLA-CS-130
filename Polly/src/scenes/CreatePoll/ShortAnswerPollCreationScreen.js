import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'
import { theme, styles } from './index'

export default class ShortAnswerPollCreationScreen extends React.Component {
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
            onPress={this.props.navigation.getParam('createPoll')}
          />
        </View>
      </ThemeProvider>
    );
  }
}