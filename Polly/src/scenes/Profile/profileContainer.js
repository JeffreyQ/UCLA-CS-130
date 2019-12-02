// import React from 'react'
// import ProfileScreen from './profile'
// import { connect } from 'react-redux'
// import { createStackNavigator } from 'react-navigation-stack'

// import { getSubscribers, getSubscribedTo } from '../../actions/user' 

// class ProfileContainer extends React.Component{
//         constructor(props) {
//         super(props)
//         props.getSubscribedTo()
//         props.getSubscribers()
//     }
//     render() {
//         return (
//           <ProfileScreen
//             subscribers={this.props.subscribers}
//             subscribed={this.props.subscribed}
//           />
//         )
//       }
// }
// const mapStateToProps = state => {
//     return {
//         subscribed: state.User.subscribed,
//         subscribers: state.User.subscribers
//     }
// }
// const mapDispatchToProps = dispatch => ({
// getSubscribedTo: () => dispatch(getSubscribedTo()),
// getSubscribers: ()  => dispatch(getSubscribers())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

