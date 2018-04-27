import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

import SettingsItem from '../Components/SettingsItem'
import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'

// Importing Styles
import {Colors} from '../Themes'
import styles from './Styles/SettingsScreenStyles'

class SettingsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={
                () => {
                  this.props.navigation.goBack()
                }}>
              <Ionicon
                color={Colors.tealBlueIOS}
                name='ios-arrow-back'
                size={35} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                  Settings
              </Text>
            </View>
          </View>
        </View>
        <SettingsItem
          name='feedUrl'
          label='Feed URL'
          placeholderTextColor={'black'} />
        <SettingsItem
          name='posts'
          label='Maximum amount of post'
          placeholderTextColor={'black'}
          errorMessages='Pleae enter a valid number' />
        <SettingsItem
          name='update'
          label='Update Interval in seconds'
          placeholderTextColor={'black'} />
      </View>
    )
  }
}

const SettingsScreenConnect = connect(null, null)(SettingsScreen)

export default reduxForm({
  form: 'settingsForm',
  enableReinitialize: true,
  validate: (values) => {
    const errors = {}
    if (values.posts < 0 || values.posts > 200) {
      errors.posts = 'Please enter a valid numer'
    }

    if (values.update < 0) {
      errors.update = 'Enter a valid time'
    }
    return errors
  }
})(SettingsScreenConnect)
