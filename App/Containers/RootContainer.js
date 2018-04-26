import React, {Component} from 'react'
import {
  View
} from 'react-native'
import {connect} from 'react-redux'

// Importing local libraries
import ReduxNavigation from '../Navigation/ReduxNavigation'

class RootContainer extends Component {
  render () {
    return (
      <View style={{
        flex: 1
      }}>
        <ReduxNavigation />
      </View>
    )
  }
}
  
export default connect(null, null)(RootContainer)
