import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { Header, Button, Input } from 'react-native-elements'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

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
      );
  }
}


class CreatePollScreen extends React.Component {
    render() {
      const {navigate} = this.props.navigation;
      return(
          <View style={{flex: 1, alignItems: 'center'}}> 
          <Header centerComponent={{ text: 'Create New Poll', style: { color: '#fff',  fontSize: 20, fontWeight: 'bold' } }}>
          </Header>
          <Text> Select Poll Type </Text>
          <Button
              title="Select All"
              type="solid"
              onPress={() => navigate('SelectAllPoll', {name: 'Select All'})}
          />
          <Button
              title="Multiple Choice"
              type="solid"
              onPress={() => navigate('MultipleChoicePoll', {name: 'Select All'})}
          />
          <Button
              title="Short Answer"
              type="solid"
              onPress={() => navigate('ShortAnswerPoll', {name: 'Select All'})}
          />
          <Button
              title="Number Scale"
              type="solid"
              onPress={() => navigate('NumberScalePoll', {name: 'Select All'})}
          />
          </View>
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