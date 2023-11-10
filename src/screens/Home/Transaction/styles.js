import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bottomLeftRounded: {
        borderBottomLeftRadius: 8
    },
    bottomRightRounded:
    {
        borderBottomRightRadius: 8,
    },
    newestTransaction: {
        backgroundColor: '#6AA84F',
    },

    transactionContainer: {
        minWidth: '90%',
        height: 90,
        marginBottom: 10,
    },
    titleContainer: {
        flex: 5,
        padding: 5,
        marginRight: 2,
        backgroundColor: '#EEEEEE',
    },
    titleText: {
        marginRight: 10,
        textAlign: 'right',
        fontWeight: '600',
    },
    topLeftRounded:
    {
        borderTopLeftRadius: 8,
    },
    topRightRounded:
    {
        borderTopRightRadius: 8,
    },
    valueContainer: {
        flex: 7,
        padding: 5,
        backgroundColor: '#EEEEEE',
    },
    valueText: {
        marginLeft: 5,
    },
});

export default styles;
