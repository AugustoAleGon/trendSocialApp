import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'

// Styles of the Component
import styles from './Styles/PostBoxStyles'

class PostBox extends Component{
    render () {
        return(
            <View style={styles.boxWrapper}>
                <View style={styles.boxContainer}>
                    <View style={styles.boxRow}>
                        <Text style={styles.dateText}>27/04/2018</Text>
                        <Text style={styles.byText}> By </Text>
                        <Text style={styles.authorText}>Elon Musk</Text>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text
                            numberOfLines={3}   
                            style={styles.messageText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus venenatis fermentum. Aliquam egestas lectus eu lorem suscipit consectetur. Quisque vulputate tristique turpis ut interdum. Cras bibendum augue quis turpis fringilla, nec ultrices metus maximus. Nam sit amet auctor odio. In hendrerit varius risus sit amet dictum. Duis velit metus, sagittis eu nulla ut, consequat cursus mauris. Suspendisse congue, nisl eget pretium vehicula, felis enim lacinia eros, eget luctus eros leo nec erat. Curabitur sed sem et quam venenatis convallis ac quis purus.
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default PostBox