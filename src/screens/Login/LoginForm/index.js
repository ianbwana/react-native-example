import { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import shared from '../../../styles/shared';
import Spacer from '../../../components/common/Spacer';
import styles from './styles';
import Button from '../../../components/common/Button';
import { lightText } from '../../../styles/variables';

function LoginForm({ handleLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const errorsObject = {};

        if (!email) {
            errorsObject.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errorsObject.email = 'Email is invalid.';
        }

        if (!password) {
            errorsObject.password = 'Password is required.';
        }

        setErrors(errorsObject);
        setIsFormValid(Object.keys(errorsObject).length === 0);
    };

    useEffect(() => {
        validateForm();
    }, [email, password]);

    const login = () => {
        validateForm();
        if (isFormValid) {
            handleLogin({ email, password });
        }
    };

    return (
        <View style={[shared.centeredContent, shared.containerBorder, shared.rounded, styles.formContainer]}>
            <Spacer topSpacing={20} />
            <View style={[shared.innerContainer, shared.ninthWidth, shared.maxWidth400]}>
                <Text>Email</Text>
            </View>
            <TextInput
                onChangeText={(e) => setEmail(e)}
                value={email}
                placeholder='user@example.com'
                inputMode='email'
                placeholderTextColor={lightText}
                style={[
                    shared.innerContainer,
                    shared.ninthWidth,
                    shared.maxWidth400,
                    shared.rounded,
                    shared.containerBorder,
                    shared.textInput,
                    styles.textInput]}
            />
            <Spacer topSpacing={10} />
            <View style={[shared.innerContainer, shared.ninthWidth, shared.maxWidth400]}>
                <Text>Password</Text>
            </View>
            <TextInput
                onChangeText={(e) => setPassword(e)}
                value={password}
                placeholder='password'
                secureTextEntry
                placeholderTextColor={lightText}
                style={[
                    shared.innerContainer,
                    shared.ninthWidth,
                    shared.maxWidth400,
                    shared.rounded,
                    shared.containerBorder,
                    shared.textInput,
                    styles.textInput]}
            />
            <Spacer topSpacing={5} />
            <View style={[shared.innerContainer, shared.ninthWidth, shared.maxWidth400]}>
                {Object.values(errors).map((error, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <View style={shared.innerContainer} key={index}>
                        <Text style={shared.errorText}>{error}</Text>
                    </View>
                ))}
            </View>
            <Spacer topSpacing={20} />
            <Button buttonText='Sign In' dark onPress={login} />
            <Spacer topSpacing={20} />
        </View>
    );
}

export default LoginForm;
