import axios from 'axios';
import { BASE_URL, PARTNER_NAME, PARTNER_PASSWORD } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setUser = async (user) => {
    await AsyncStorage.setItem('storedUser', JSON.stringify(user));
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}?command=Authenticate`, null, {
            params: {
                partnerName: PARTNER_NAME,
                partnerPassword: PARTNER_PASSWORD,
                partnerUserID: email.toLowerCase(),
                partnerUserSecret: password,
            },
        });
        setUser(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Invalid credentials');
    }
};
