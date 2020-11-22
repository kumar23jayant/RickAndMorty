import { StyleSheet } from 'react-native'
import { Colors } from '../../style'

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        elevation: 4,
        backgroundColor: Colors.COLOR_FFFFFF,
        borderRadius: 6,
        margin: 10
    },
    icon: {
        height: 220,
        width: 220,
        borderRadius: 6,
        margin: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '700'
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    infoContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 15
    },
    infoTitlePlaceholder: {
        fontSize: 12
    },
    infoTitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    shareContainer: {
        elevation: 4,
        margin: 20,
        backgroundColor: Colors.COLOR_4485F5,
        borderRadius: 10
    },
    share: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.COLOR_4485F5,
        height: 40,
        borderRadius: 10
    },
    shareTitle: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        color: Colors.COLOR_FFFFFF
    }
})

export default style