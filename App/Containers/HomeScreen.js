import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './Styles/HomeScreenStyles'

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          Hello My Home Screen!!
        </Text>
        <TouchableOpacity onPress={
          () => {
            this.props.navigation.navigate('Settings')
          }
        }>
          <Text>Next Screen!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeScreen
