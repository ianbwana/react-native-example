import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        height: 70,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
    },
    logoutButton: {
        height: 40,
        width: 80,
        borderRadius: 8,
    },
    logoutButtonText: {
        color: '#07271F',
        fontSize: 14,
        fontWeight: '700',
    },
    userName: {
        color: '#03D47C',
    },
});

export default styles;
