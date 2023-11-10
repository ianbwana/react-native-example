import { StyleSheet } from 'react-native';

const modalStyles = StyleSheet.create({
    alertModalImage: {
        width: 50,
        height: 50,
    },

    alertModalHeight: {
        height: 200,
    },
    modalWidth:
    {
        width: 200,
    },
    modalInnerBackground: {
        backgroundColor: '#00000000',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    closeButton: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
    },
    closeButtonImage: {
        width: 30,
        height: 30,
    },
    modalOuterBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000099',
    },
    modalView: {
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        padding: 20,
    },
});

export default modalStyles;
