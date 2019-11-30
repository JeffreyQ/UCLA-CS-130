import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'
import { theme, elevationShadowStyle } from './index'

export default class TrueFalsePollCreationScreen extends React.Component {
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
            onPress={this.props.navigation.getParam('createPoll')}
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
