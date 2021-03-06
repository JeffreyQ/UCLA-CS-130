import { StyleSheet } from 'react-native'

export const theme = {
    Button: {
      containerStyle: {
        margin: 10,
        width: '85%',
      },
      titleStyle: {
        color: 'black',
        fontSize: 36
      },
      buttonStyle: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
      },
      type: 'clear'
    }
  }
  
  export function elevationShadowStyle(elevation) {
    return {
      elevation,
      shadowColor: '#0047FF',
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.2,
      shadowRadius: 0.8 * elevation,
    };
  }
  
  export const styles = StyleSheet.create({
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
    optionInput: {
      height: 30
    },
    container: {
      height: 118,
      ...elevationShadowStyle(5)
    },
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    bottom: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 15
    }
  });