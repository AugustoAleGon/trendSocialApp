import {StyleSheet} from 'react-native'
import {Colors} from '../../Themes'

export default StyleSheet.create({
  settingsContainer: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyIOS
  },
  titleText: {
    fontSize: 14,
    fontWeight: '400'
  },
  errorText: {
    color: 'red'
  }
})
