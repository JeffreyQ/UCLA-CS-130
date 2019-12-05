import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { ScrollView , withNavigation} from 'react-navigation'

import Heading from './heading'
import Card from './card'

import Util from '../../util'


class ProfileScreen extends React.Component{
    onCardPress = pollId => {
        const{getPollResponse,subscribers,pollResponse} = this.props
        getPollResponse(pollId)
        return this.props.navigation.navigate('PollResponse',{
            pollId,
            subscribers,
            getPollResponse,
            pollResponse
        })
    }

    render(){
        console.log(this.props);
        const { myPolls } = this.props
        const { navigate } = this.props.navigation
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Heading
                    subscriberPress={() => navigate('SubscriberScreen',{subscribers:this.props.subscribers})} 
                    subscriptionPress={() => navigate('SubscriptionScreen', {subscribedTo:this.props.subscribedTo})} 
                    subscribers={this.props.subscribers} 
                    subscribedTo={this.props.subscribedTo}
                    me={this.props.me}
                    logout={this.props.logout}
                    />
                    <View style={{flex: 1}}>
                    <ScrollView
                    contentContainerStyle={{paddingBottom:20}}
                    style={{
                        height:'100%',
                        alignSelf:'stretch',
                        paddingRight: 20,
                        paddingLeft: 20
                    }}>
                        {myPolls.map(poll =>
                        <Card
                            key={poll.id}
                            poll={poll}
                            onPress={() => this.onCardPress(poll.id)}
                        />
                        )}
                    </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    viewContainer:{
      paddingTop: 80,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#ffc0cb"
    },
    bodyContainer: {
      padding: 20
    },
    heading: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    scrollContainer: {
      padding: 10,
      borderBottomWidth: 0.4,
      borderBottomColor: '#A5A3A3'
    },
  });

  export default withNavigation(ProfileScreen)