export { default } from './profileNavigator'

// import React from 'react'
// import { createStackNavigator } from 'react-navigation-stack'
// import { StyleSheet, Text, SafeAreaView, View,Button } from 'react-native'
// import PollResponse from '../PollResponse'
// import { heading1Text, bodyText, grayBody } from '../../textMixins'
// import Card from './card'
// import Heading from './heading'
// import SubscriptionContainer  from './subscriptionContainer'
// import SubscriberContainer from './subscriberContainer'
// import { getSubscribedTo, getSubscribers } from '../../actions/user' 
// import { connect } from 'react-redux'

// class ProfileScreen extends React.Component{

//   onCardPress = pollId => {
//     return this.props.navigation.navigate('PollResponse', {
//       pollId
//     })
//   }

//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <SafeAreaView style={styles.container}>
//         <Heading subscriberPress={() => navigate('SubscriberContainer')} subscriptionPress={() => navigate('SubscriptionContainer')} />
//         <View style={styles.bodyContainer}>
//           <View style={styles.heading}>
//             <Text style={{...heading1Text}}>My Polls</Text>
//             <Text style={{...bodyText, ...grayBody}}>Filter</Text>
//           </View>
//           <Card onPress={() => this.onCardPress(1)}/>
//         </View>
//       </SafeAreaView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   viewContainer:{
//     paddingTop: 80,
//     paddingBottom: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: "#ffc0cb"
//   },
//   bodyContainer: {
//     padding: 20
//   },
//   heading: {
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     alignItems: 'center'
//   }
// });

// const RouteConfigs = {
//   Profile: {
//     screen: ProfileScreen
//   },
//   PollResponse: {
//     screen: PollResponse
//   },
//   SubscriptionContainer: {
//     screen: SubscriptionContainer
//   },
//   SubscriberContainer:{
//     screen: SubscriberContainer
//   },
// }

// const StackNavigatorConfigs = {
//   initialRouteName: 'Profile',
// }


// export default createStackNavigator(RouteConfigs, StackNavigatorConfigs)