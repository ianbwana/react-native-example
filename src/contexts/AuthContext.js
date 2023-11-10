import {
    createContext,
    useReducer,
    useEffect,
} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from '../reducers/AuthReducer';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const navigation = useNavigation();
    const [user, dispatch] = useReducer(AuthReducer, {
        isAuthenticated: false,
        user: null,
    });
    const checkAuth = async () => {
        const storedUser = await AsyncStorage.getItem('storedUser');
        const authenticatedUser = JSON.parse(storedUser);
        if (authenticatedUser !== null && authenticatedUser.authToken) {
            dispatch({ type: 'LOGIN_SUCCESS', user: authenticatedUser });
            navigation.navigate('Home');
        } else {
            navigation.navigate('Login');
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return <AuthContext.Provider value={{ user, dispatch }}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
