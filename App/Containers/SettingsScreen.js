import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './Styles/SettingsScreenStyles'

class SettingsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          Hello This is my SettingsScreen!
        </Text>
      </View>
    )
  }
}

export default SettingsScreen
