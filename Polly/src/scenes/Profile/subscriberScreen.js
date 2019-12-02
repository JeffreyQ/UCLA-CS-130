import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableHighlight} from 'react-native'
import { ScrollView } from 'react-navigation'

import { heading2Text, bodyText, grayBody } from '../../textMixins'
import SubscribeEntry from './subscribeEntry'

const users = [
  {
    id:1,
    name: 'Stephanie Y',
    image: require('./profile.jpg')
  },
  {
    id:2,
    name: 'Ram G.',
    image: require('./profile.jpg')
  },
  {
    id:3,
    name: 'Jeff Q.',
    image: require('./profile.jpg')
  },
  {
    id:4,
    name: 'Jesse C.',
    image: require('./profile.jpg')
  },
  {
    id:5,
    name: 'Lawrence C.',
    image: require('./profile.jpg')
  },
]
const numUsers = users.length

// class SubscriptionScreen extends React.Component{

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View style ={styles.headingContainer}>
//             <Text style={styles.heading}> {numUsers} Pollers </Text>
//         </View>
//         <View style={styles.scrollContainer}>
//           <ScrollView
//             style={{
//               height:'100%',
//               alignSelf:'stretch',
//               padding: 20,
//             }}>
//               {users.map(user => <SubscribeEntry key={user.id} user={user}/>)}
//           </ScrollView>
//         </View>
//       </SafeAreaView>
//     )
//   }
// }

class SubscriberScreen extends React.Component{

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style ={styles.headingContainer}>
            <Text style={styles.heading}> {this.props.users.length} Pollees </Text>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView
            style={{
              height:'100%',
              alignSelf:'stretch',
              padding: 20,
            }}>
              {this.props.users.map(user =><SubscribeEntry key={user.id}user={user}/>)}
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
export default SubscriberScreen
