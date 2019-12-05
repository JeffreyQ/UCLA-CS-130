import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableHighlight} from 'react-native'
import { ScrollView } from 'react-navigation'

import { heading2Text, bodyText, grayBody } from '../../textMixins'
import SubscribeEntry from './subscribeEntry'

  
  class SubscriptionScreen extends React.Component{
  
    render() {
      console.log(this.props);
      if(!this.props.navigation.getParam('subscribedTo'))
      {
          return(
            <SafeAreaView style={styles.container}>
              <View style ={styles.headingContainer}>
                  <Text style={styles.heading}> 0 Pollers </Text>
              </View>
          </SafeAreaView>

          )
      }
      return (
        <SafeAreaView style={styles.container}>
          <View style ={styles.headingContainer}>
              <Text style={styles.heading}> {this.props.navigation.getParam('subscribedTo').length} Pollers </Text>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView
              style={{
                height:'100%',
                alignSelf:'stretch',
                padding: 20,
              }}>
                {this.props.navigation.getParam('subscribedTo').map(user =><SubscribeEntry key={user.id}user={user}/>)}
                {/* {users.map(user => <SubscribeEntry key={user.id} user={user}/>)} */}
            </ScrollView>
          </View>
        </SafeAreaView>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    headingContainer: {
      padding: 20,
      alignItems: 'center',
      borderBottomWidth: 0.4,
      borderBottomColor: '#A5A3A3'
    },
    scrollContainer: {
      padding: 10,
      borderBottomWidth: 0.4,
      borderBottomColor: '#A5A3A3'
    },
    profilePicContainer: {
      alignItems: 'center'
    },
    profilePic: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    heading: {
      ...heading2Text,
      flexDirection: 'row',
      alignItems: 'center'
    },
    bodyContainer: {
      padding: 20
    },
  })
  export default SubscriptionScreen
  