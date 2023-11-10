import {
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import {
    Text,
    View,
    FlatList,
    Alert,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { TransactionContext } from '../../contexts/TransactionContext';
import ScreenContainer from '../../containers/ScreenContainer';
import Header from '../../components/common/Header';
import Spacer from '../../components/common/Spacer';
import { AlertContext } from '../../contexts/AlertContext';
import shared from '../../styles/shared';
import Button from '../../components/common/Button';
import Transaction from './Transaction';
import Search from './Search';
// eslint-disable-next-line import/no-unresolved
import NewTransactionForm from './NewTransactionForm';
import styles from './styles';
import {
    createTransaction,
    retrieveTransactions,
} from '../../actions/transactionActions';

const noContent = require('../../../assets/no-content.png');


function Home() {
    const { user, dispatch } = useContext(AuthContext);
    const [transactionList, setTransactionList] = useState([]);
    const { toggleLoader } = useContext(LoadingContext);
    const { formVisible, toggleTransactionForm } = useContext(TransactionContext);
    const { showAlert } = useContext(AlertContext);

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const navigation = useNavigation();

    /**
     * Full text search and filter function that finds a transaction based on the merchant name input
     * @param {string} text The name of the merchant
     * @return {Array}
     */
    const searchFilterFunction = useCallback((text) => {
        if (text) {
            const newData = transactionList.filter((item) => {
                const itemData = item.merchant
                    ? item.merchant.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        } else {
            setFilteredData(transactionList);
            setSearch(text);
        }
    });

    const logout = async () => {
        dispatch({ type: 'LOGOUT' });
        await AsyncStorage.clear();
        navigation.navigate('Login');
    };

    const requestErrorAlert = (errorType) => {

        let errorMessage;
        if (errorType === 'sessionError') {
            errorMessage = 'Looks like your session expired. Please log in again';
        }
        if (errorType === 'getTransactionsError') {
            errorMessage = 'We could not fetch your transactions';
        }
        if (errorType === 'postTransactionError') {
            errorMessage = 'We could not save your transaction';
        }

        Alert.alert(
            'Oops',
            errorMessage,
            [{
                text: 'OK',
                onPress: () => logout(),
            },
            errorType === 'getTransactionError'
            && {
                text: 'Retry',
                onPress: () => {
                    getTransactions();
                }
            }
            ]);
    };

    const storeTransaction = async (transaction) => {
        await AsyncStorage.setItem(
            'newestTransaction',
            JSON.stringify(transaction),
        );
    };

    const retrieveNewestTransaction = async () => {
        const storedData = await AsyncStorage.getItem('newestTransaction');
        const transactionData = JSON.parse(storedData);
        if (transactionData && transactionData.transactionID) {
            return transactionData;
        }
        return false;
    };

    const submitTransaction = async (merchant, amount, date) => {
        const formattedAMount = amount * 100;
        toggleLoader(true, 'Saving your transaction...');

        const response = await createTransaction(
            user.user.authToken,
            date,
            formattedAMount,
            merchant,
        );
        try {
            if (response.jsonCode === 200) {
                toggleLoader(false, '');
                showAlert(
                    'success',
                    'Success! Your new transaction has been saved successfully',
                );
                const transactionData = response.transactionList[0];

                /** Add attribute 'newest' to the transaction response from the server */
                const newestTransaction = {
                    ...transactionData,
                    newest: true,
                };
                /** Push transaction response to the top of the transactions list */
                setTransactionList([newestTransaction, ...transactionList]);
                storeTransaction(transactionData);
            }
            if (response.jsonCode === 407) {
                toggleLoader(false, '');
                requestErrorAlert('sessionError');
            }
        } catch (error) {
            toggleLoader(false, '');
            requestErrorAlert('postTransactionError');

        }
    };

    const getTransactions = async () => {
        toggleLoader(true, 'Fetching your transactions...');

        try {
            const transactionData = await retrieveTransactions(user?.user?.authToken);
            if (transactionData.jsonCode === 200) {
                toggleLoader(false, '');
                const allTransactions = transactionData.transactionList;

                /** Check if there is any stored transaction on the device i.e the transaction that was last added by this user on this device */
                const storedTransaction = await retrieveNewestTransaction();
                if (storedTransaction) {
                    try {
                        /** Find the newest transaction on the transaction list */
                        const newTransaction = allTransactions.find(
                            (entry) => entry.transactionID === storedTransaction.transactionID,
                        );

                        /** Add the attribute 'newest' to the transaction on the list */
                        newTransaction.newest = true;

                        /** Push the 'newest' tagged transaction to the top of the transactions list */
                        allTransactions.splice(newTransaction, 1);
                        allTransactions.unshift(newTransaction);
                        setTransactionList(allTransactions);
                    } catch (error) {
                        setTransactionList(allTransactions);
                    }
                } else {
                    setTransactionList(allTransactions);
                }
            }
            if (transactionData.jsonCode === 407) {
                toggleLoader(false, '');
                requestErrorAlert('sessionError');
            }
        } catch (error) {
            toggleLoader(false, '');
            requestErrorAlert('getTransactionsError');
        }
    };

    const getToken = async () => {
        try {
            if (user.isAuthenticated && user.user.authToken.length > 0) {
                getTransactions();
            } else {
                logout();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    const clearSearch = () => {
        setSearch();

        setFilteredData([]);
    };

    /**
     * Memoized function for rendering Transactions on the flatlist.
     * @param {Object} item A transaction instance
     */
    const renderTransaction = useCallback(({ item }) => (
        <Transaction
            id={item.transactionID}
            merchant={item.merchant}
            amount={item.amount / 100}
            created={item.created}
            newest={item.newest}
        />
    ));

    return (
        <>
            <ScreenContainer centeredVertical centeredHorizontal={false}>
                <Header
                    email={user?.user?.email ? user.user.email : 'User'}
                    onPress={logout} />
                <Spacer topSpacing={10} />
                <View
                    style={[shared.horizontal, shared.ninthWidth, styles.innerHomeContainer]}>
                    <Search
                        handleClear={clearSearch}
                        handleChange={(e) => searchFilterFunction(e)}
                        value={search} />
                </View>
                <Spacer topSpacing={10} />
                <View style={[shared.fullWidth, shared.centeredContent, shared.flex]}>
                    {transactionList && transactionList.length === 0 ? (
                        <View style={shared.centeredContent}>
                            <Text>No transactions available</Text>
                            <Spacer topSpacing={20} />
                            <Image source={noContent} style={styles.noContent} />
                        </View>
                    ) : (
                        <FlatList
                            style={shared.fullWidth}
                            contentContainerStyle={shared.centeredContent}
                            data={filteredData.length > 0 ? filteredData : transactionList}
                            renderItem={renderTransaction}
                            keyExtractor={(item) => item.transactionID}
                        />
                    )}
                </View>
                <Spacer topSpacing={20} />
                {formVisible ? null : (
                    <Button
                        buttonText='Add transaction'
                        dark
                        onPress={toggleTransactionForm}
                    />
                )}
                <Spacer topSpacing={20} />
            </ScreenContainer>
            <NewTransactionForm visible={formVisible} submit={submitTransaction} />
        </>
    );
}

export default Home;
