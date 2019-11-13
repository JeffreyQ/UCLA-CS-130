import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header, Button } from 'react-native-elements'

class CreatePollScreen extends React.Component {
    render() {
      return(
        
        <View style={{flex: 1, alignItems: 'center'}}> 
          <Header centerComponent={{ text: 'Create New Poll', style: { color: '#fff',  fontSize: 20, fontWeight: 'bold' } }}>
          </Header>
          <Text> Select Poll Type </Text>
          <Button
            title="Select All"
            type="solid"
          />
          <Button
            title="Multiple Choice"
            type="solid"
          />
          <Button
            title="Short Answer"
            type="solid"
          />
          <Button
            title="Number Scale"
            type="solid"
          />
        </View>
      );
    }
  }


  export default CreatePollScreen