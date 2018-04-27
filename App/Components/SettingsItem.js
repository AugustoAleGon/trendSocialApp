import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

import {Field} from 'redux-form'
import styles from './Styles/SettingsItemStyles'

const renderFormInput = ({input, label, meta: {touched, error}, errorMessage, ...custom}) => {
return(
    <View style={styles.settingsContainer}>
    <Text style={styles.titleText}>{label}</Text>
    <TextInput
      underlineColorAndroid='rgba(0,0,0,0)'
      value={input.value}
      onChangeText={(value) => input.onChange(value)}
      shake={error}
      {...custom} />
    {error && touched && <Text style={styles.errorText}>{errorMessage}</Text>}
  </View>   
)
}

export default class SettingsItem extends Component {
  render () {
    const { ...attributes } = this.props
    return (
      <Field
        component={renderFormInput}
        {...attributes} />
    )
  }
}
