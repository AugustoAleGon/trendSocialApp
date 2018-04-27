import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// Actions
import socialActions from '../Redux/Reducers/social'

import {formattingTime} from '../Lib/Utils'
import PostBox from '../Components/PostBox'
// Importing Styles
import styles from './Styles/HomeScreenStyles'
import {Colors} from '../Themes'

class HomeScreen extends Component {
  componentDidMount () {
    this.props.getSocialPost()
  }

  _renderItem = ({item}) => {
    if (item.text) {
      return (
        <PostBox
          date={formattingTime(item.created_at)}
          author={item.user.name}
          message={item.text} />
      )
    }
  }

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
        <View>
          <FlatList
            renderItem={this._renderItem}
            keyExtractor={item => item.id_str}
            data={this.props.postList.postList} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    postList: state.social.postList
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getSocialPost: bindActionCreators(socialActions.getSocialPost, dispatch),
    getLimitPost: bindActionCreators(socialActions.getLimitPost, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
