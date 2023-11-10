import { StyleSheet, StatusBar } from 'react-native';

import { contentPadding } from './variables';

const shared = StyleSheet.create({
    absolute: { position: 'absolute' },
    absoluteFill: StyleSheet.absoluteFillObject,
    alignItemsCenter: { alignItems: 'center' },
    alignItemsFlexEnd: { alignItems: 'flex-end' },
    alignItemsFlexStart: { alignItems: 'flex-start' },
    alignSelfCenter: { alignSelf: 'center' },
    alignSelfFlexEnd: { alignSelf: 'flex-end' },
    alignSelfFlexStart: { alignSelf: 'flex-start' },
    alignSelfStretch: { alignSelf: 'stretch' },
    centeredContent: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBorder: {
        borderColor: '#07271F',
        borderWidth: 2,
    },
    darkBackground: { backgroundColor: '#07271F' },
    eighthWidth: { width: '80%' },
    errorText: {
        fontSize: 12,
        color: '#F44336',
        fontStyle: 'italic',
    },
    horizontalAndVerticallyAligned: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    flex: { flex: 1 },
    flexGrow: { flexGrow: 1 },
    flexNoGrow: { flexGrow: 0 },
    flexWrap: { flexWrap: 'wrap' },
    flexNoWrap: { flexWrap: 'nowrap' },
    flexShrink0: { flexShrink: 0 },
    flexShrink1: { flexShrink: 1 },
    horizontal: { flexDirection: 'row' },
    horizontalReverse: { flexDirection: 'row-reverse' },

    darkText: {
        color: '#07271F',
    },
    displayFlex: { display: 'flex' },
    displayNone: { display: 'none' },
    fullHeight: { height: '100%' },
    fullMinWidth: { minWidth: '100%' },
    fullMaxWidth: { maxWidth: '100%' },
    fullWidth: { width: '100%' },
    innerContainer: {
        marginBottom: 5,
    },
    justifyContentCenter: { justifyContent: 'center' },
    justifyContentFlexEnd: { justifyContent: 'flex-end' },
    justifyContentFlexStart: { justifyContent: 'flex-start' },
    justifyContentSpaceBetween: { justifyContent: 'space-between' },
    justifyContentSpaceEvenly: { justifyContent: 'space-evenly' },
    largeButtonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    largeButton: {
        height: 50,
        borderRadius: 50 / 2,
    },
    largeText: { fontSize: 16, fontWeight: '500' },
    lightBackground: { backgroundColor: '#03D47C' },
    lightGrayBackground: {
        backgroundColor: '#EEEEEE',
    },
    lightButtonText: { color: '#03D47C' },
    lightText: { color: '#999999' },
    ninthWidth: { width: '90%' },
    maxWidth400: { maxWidth: 400 },
    maxWidth600: { maxWidth: 600 },
    normalText: { fontSize: 14, fontWeight: '500' },
    padding: { padding: contentPadding },
    paddingHalf: { padding: contentPadding / 2 },
    textCenter: { textAlign: 'center' },
    seventhWidth: { width: '70%' },
    sixthWidth: { width: '60%' },
    redBackground: { backgroundColor: '#F44336' },
    relative: { position: 'relative' },
    rounded: { borderRadius: 8 },
    smallText: {
        fontSize: 13, fontWeight: '500',
    },
    smallTextExtraBold: {
        fontSize: 13,
        fontWeight: '800',
    },
    statusBar: {
        backgroundColor: '#A6D8C8',
        paddingTop: StatusBar.currentHeight,
    },
    networkBar: {
        height: 20,
        backgroundColor: 'yellow',
    },
    textInput: {
        height: 35,
        paddingLeft: 5,
    },
    boldText: { fontWeight: '600' },
    extraBoldText: { fontWeight: '700' },
    vertical: { flexDirection: 'column' },
    verticalReverse: { flexDirection: 'column-reverse' },
    whiteText: { color: '#FFFFFF' },
});

export default shared;
