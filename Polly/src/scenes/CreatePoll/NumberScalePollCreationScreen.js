import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'
import { theme, styles } from './index'

export default class NumberScalePollCreationScreen extends React.Component {
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
            onPress={this.props.navigation.getParam('createPoll')}
          />
        </View>
      </ThemeProvider>
    );
  }
}