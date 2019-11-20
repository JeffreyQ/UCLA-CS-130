import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { ScrollView } from 'react-navigation'

import SearchEntry from './searchEntry'

const users = [
  {
    name: 'Stephanie Y',
    image: './profile.jpg',
    status: null
  },
  {
    name: 'Ram G.',
    image: './profile.jpg',
    status: null
  },
  {
    name: 'Jeff Q.',
    image: './profile.jpg',
    status: 'Request Sent'
  },
  {
    name: 'Jesse C.',
    image: './profile.jpg',
    status: 'Added'
  },
  {
    name: 'Lawrence C.',
    image: './profile.jpg',
    status: null
  },
]

class SearchScreen extends React.Component {
  state = {
    search: '',
  }

  updateSearch = search => {
    this.setState({ search })
  }

  render() {
    const { search } = this.state

    return (
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search for friends"
            onChangeText={this.updateSearch}
            value={search}
            lightTheme
          />
        </View>
        <View style={{flex: 1}}>
          <ScrollView
            style={{
              height:'100%',
              alignSelf:'stretch',
              paddingRight: 20,
              paddingLeft: 20
            }}>
              {users.map(user => <SearchEntry user={user} />)}
            </ScrollView>>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
})

export default SearchScreen
