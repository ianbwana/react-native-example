import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    closeButton: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
    },
    transactionModalHeight:
    {
        height: '55%',
    },
    keyBoardOpenHeight: {
        height: '90%'
    },
    closeButtonImage: {
        width: 30,
        height: 30,
    },
    transactionFormContainer: {
        borderColor: '#D8D8D8',
        color: '#07271F',
    },
    transactionFormTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 20,
    },
    transactionInput: {
        borderColor: '#D8D8D8',
        height: 35,
    },
    dateInputContainer: {
        borderColor: '#D8D8D8',
        maxWidth: 400,
        height: 35,
        paddingLeft: 3,
    },
});

export default styles;
