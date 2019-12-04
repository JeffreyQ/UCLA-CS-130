
import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

//Found accordion here:https://medium.com/@KPS250/creating-an-accordion-in-react-native-f313748b7b46
export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          user: props.user,
          expanded : false,
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.user.name}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'black'} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
                </View>
            }
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}
function elevationShadowStyle(elevation) {
    return {
      elevation,
      shadowColor: '#0047FF',
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.3,
      shadowRadius: 0.8 * elevation,
      shadowOpacity: 0.12
    };
  }

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: 'black',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: 'white',
    },
    parentHr:{
        height:1,
        color: 'black',
        width:'100%',
    },
    child:{ 
        flexDirection: 'row',
        marginBottom: 28,
        backgroundColor: 'white',
        height: 58,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        ...elevationShadowStyle(5),
    }
    
});