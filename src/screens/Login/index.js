import { useContext } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { AlertContext } from '../../contexts/AlertContext';
import Spacer from '../../components/common/Spacer';
import LoginForm from './LoginForm';
import ScreenContainer from '../../containers/ScreenContainer';
import styles from './styles';
import { login } from '../../actions/authActions';

function Login() {
    const navigation = useNavigation();
    const { dispatch } = useContext(AuthContext);
    const { toggleLoader } = useContext(LoadingContext);
    const { showAlert } = useContext(AlertContext);

    const handleLogin = async ({ email, password }) => {
        toggleLoader(true, 'Logging In');
        dispatch({ type: 'ATTEMPT_LOGIN' });
        try {
            const response = await login(email, password);
            if (response.jsonCode === 200) {
                toggleLoader(false, '');
                dispatch({ type: 'LOGIN_SUCCESS', user: response });
                navigation.navigate('Home');
            } else {
                showAlert(
                    'failure',
                    'Sorry! We could not log you in. Please check your email/password and try again',
                );
                toggleLoader(false, '');
                dispatch({ type: 'LOGIN_ERROR' });
            }
        } catch (error) {
            toggleLoader(false, '');
            showAlert(
                'failure',
                'Sorry!We could not log you in. Please check your credentials and try again',
            );
            dispatch({ type: 'LOGIN_ERROR' });
        }
    };

    return (
        <ScreenContainer centeredVertical centeredHorizontal>
            <Text style={styles.welcomeText}>Welcome to Expensitest</Text>
            <Spacer topSpacing={20} />
            <LoginForm handleLogin={handleLogin} />
        </ScreenContainer>
    );
}

export default Login;
