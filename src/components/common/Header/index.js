import {
    View,
    Text,
} from 'react-native';
import shared from '../../../styles/shared';
import styles from './styles';
import ButtonSmall from '../ButtonSmall';


function Header(props) {
    const { onPress, email } = props;

    return (
        <View style={[shared.darkBackground, styles.headerContainer]}>
            <Text style={styles.userName}>{email || 'Welcome, User'}</Text>
            <ButtonSmall buttonType='header' buttonText='Logout' header onPress={onPress} />
        </View>
    );
}

export default Header;
