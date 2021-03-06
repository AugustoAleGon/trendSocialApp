import {StackNavigator} from 'react-navigation'
import SettingsScreen from '../Containers/SettingsScreen'
import HomeScreen from '../Containers/HomeScreen'

const primaryScreens = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})

export default primaryScreens
