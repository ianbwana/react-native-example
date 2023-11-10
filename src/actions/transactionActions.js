import axios from 'axios';
import { BASE_URL } from '@env';

export const retrieveTransactions = async (token) => {
    try {
        const response = await axios.post(`${BASE_URL}?command=Get`, null, {
            params: {
                authToken: token,
                returnValueList: 'transactionList',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const createTransaction = async (token, created, amount, merchant) => {
    try {
        const response = await axios.post(`${BASE_URL}?command=CreateTransaction`, null, {
            params: {
                merchant,
                amount,
                created,
                authToken: token,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
