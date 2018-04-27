import {StyleSheet} from 'react-native'
import {Colors} from '../../Themes'

export default StyleSheet.create({
    boxWrapper: {
        height: 110,
        width: '100%'
    },
    boxContainer: {
        margin: 10,
        borderWidth: 1,
        borderColor: Colors.tealBlueIOS,
        flex: 1,
        borderRadius: 15
    },
    boxRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        padding: 7
    },
    dateText: {
        fontWeight: '200',
        color: Colors.greyIOS
    },
    byText: {
        fontSize: 14
    },
    authorText: {
        fontWeight: 'bold',
        color: Colors.blueIOS
    },
    messageContainer: {
        paddingLeft: 7,
        paddingRight: 7
    },
    messageText: {
        fontSize: 12,
        fontWeight: '300'
    }
})