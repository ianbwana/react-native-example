import {
    Pressable,
    Text,
} from 'react-native';
import shared from '../../../styles/shared';
import styles from './styles';

function ButtonSmall({
    buttonType, buttonText, header, onPress,
}) {
    return (
        <Pressable
            onPress={onPress}
            style={[
                shared.centeredContent,
                shared.rounded,
                buttonType === 'failure' ? shared.redBackground : shared.lightBackground,
                header ? styles.buttonHeaderHeight : styles.buttonHeight,
                header ? styles.buttonHeaderWidth : styles.buttonHeaderWidth]}
        >
            <Text
                style={[
                    header ? shared.darkText : shared.whiteText,
                    header ? shared.normalText : shared.largeText,
                    header ? shared.boldText : shared.normalText,
                ]} >
                {buttonText}
            </Text>
        </Pressable>
    );
}

export default ButtonSmall;
