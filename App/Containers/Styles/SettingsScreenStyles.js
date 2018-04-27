import {StyleSheet} from 'react-native'
import { ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer
  },
  headerContainer: {
    ...ApplicationStyles.screen.header,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  }
})
