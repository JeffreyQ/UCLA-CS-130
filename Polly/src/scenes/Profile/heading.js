import React from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'
import { heading2Text, bodyText, grayBody } from '../../textMixins'

// class Heading extends React.Component{
//   render(props) {
//     return(
//       <View style={styles.container}>
//       <View style={styles.profilePicContainer}>
//         <Image source={require('./profile.jpg')} style={styles.profilePic}/>
//         <Text style={styles.name}>Stephanie</Text>
//       </View>
      // <TouchableHighlight underlayColor={"#fff"} onPress={props.onPress}>
      //   <View style={styles.count}>
      //     <Text style={{...heading2Text}}>89</Text>
      //     <Text style={{...bodyText}}>Pollees</Text>
      //   </View>
      // </TouchableHighlight>
//       <View style={styles.count}>
//         <Text style={{...heading2Text}}>89</Text>
//         <Text style={{...bodyText}}>Pollers</Text>
//       </View>
//     </View>
//     )
//   }
// }

// export default Heading

export default Heading = props => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
        <Image source={require('./profile.jpg')} style={styles.profilePic}/>
        <Text style={styles.name}>Stephanie</Text>
      </View>
      <TouchableHighlight underlayColor={"#fff"} onPress={props.subscriberPress}>
        <View style={styles.count}>
          <Text style={{...heading2Text}}>89</Text>
          <Text style={{...bodyText}}>Pollees</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor={"#fff"} onPress={props.subscriptionPress}>
        <View style={styles.count}>
          <Text style={{...heading2Text}}>89</Text>
          <Text style={{...bodyText}}>Pollers</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 29,
    paddingRight: 29,
    height: 170,
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
  name: {
    ...bodyText,
    marginTop: 6
  },
  count: {
    alignItems: 'center'
  }
})
