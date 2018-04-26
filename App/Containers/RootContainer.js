import React, {Component} from 'react'
import {
  View
} from 'react-native'

import ReduxNavigation from '../Navigation/ReduxNavigation'

class RootContainer extends Component {
  render () {
    return (
      <View>
        <ReduxNavigation />
      </View>
    )
  }
}

export default RootContainer
