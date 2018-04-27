import {StyleSheet} from 'react-native'
import { ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer
  },
  headerContainer: {
    ...ApplicationStyles.screen.header,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  settingButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
