import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'

// Styles of the Component
import styles from './Styles/PostBoxStyles'

class PostBox extends Component {
  render () {
    return (
      <View style={styles.boxWrapper}>
        <View style={styles.boxContainer}>
          <View style={styles.boxRow}>
            <Text style={styles.dateText}>{this.props.date}</Text>
            <Text style={styles.byText}> By </Text>
            <Text style={styles.authorText}>{this.props.author}</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text
              numberOfLines={3}
              style={styles.messageText}>
              {this.props.message}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default PostBox
