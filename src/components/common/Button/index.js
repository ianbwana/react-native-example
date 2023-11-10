import {
    Pressable,
    Text,
} from 'react-native';
import shared from '../../../styles/shared';

function Button({ buttonText, dark, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={[
                shared.centeredContent,
                shared.innerContainer,
                shared.ninthWidth,
                shared.maxWidth400,
                shared.largeButton,
                dark ? shared.darkBackground : shared.lightBackground,
            ]}
        >
            <Text style={[shared.largeButtonText, dark ? shared.lightButtonText : shared.darkText]}>{buttonText}</Text>
        </Pressable>
    );
}

export default Button;
