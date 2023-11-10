import { Dimensions, PixelRatio, Platform } from 'react-native';

const isSuperSmallScreen = Dimensions.get('screen').width < 350;
export const scaleFactor = (isSuperSmallScreen
    ? 1
    : Platform.isPad
        ? 1.3
        : Platform.OS === 'ios' || Platform.OS === 'android'
            ? 1.1
            : 1) * (PixelRatio.getFontScale() || 1);

export const avatarSize = 40 * scaleFactor;
export const smallAvatarSize = 18 * scaleFactor;

export const contentPadding = 16 * scaleFactor;
export const lightText = '#999999'; /** Added this here because placeHolderColor values do not accept css. */
