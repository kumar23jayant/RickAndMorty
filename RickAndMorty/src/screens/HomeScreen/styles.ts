import { StyleSheet } from 'react-native'
import { Colors } from '../../style'

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 130,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 6,
        backgroundColor: Colors.COLOR_3D3E45,
        elevation: 4
    },
    itemIcon: {
        height: 130,
        width: 130,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    itemDetail: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10
    },
    itemContent: {
        color: Colors.COLOR_FFFFFF
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    filtetTitle: {
        paddingHorizontal: 10
    },
    filterItem: {
        backgroundColor: Colors.COLOR_FFFFFF,
        padding: 5,
        margin: 5,
        borderRadius: 5,
        elevation: 4
    },
    loading: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default style