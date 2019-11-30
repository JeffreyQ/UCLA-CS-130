import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'
import { theme, styles } from './index'

export default class SelectAllPollCreationScreen extends React.Component {
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
            onPress={this.props.navigation.getParam('createPoll')}
          />
        </View>
      </ThemeProvider>
    );
  }
}