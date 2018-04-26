import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

// Importing Styles
import styles from './Styles/HomeScreenStyles'
import {Colors} from '../Themes'

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                  Last Feed!
              </Text>
            </View>
            <TouchableOpacity
              style={styles.settingButton}
              onPress={
                () => {
                  this.props.navigation.navigate('Settings')
                }}>
              <Ionicon
                color={Colors.tealBlueIOS}
                name='ios-settings'
                size={35} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default HomeScreen
