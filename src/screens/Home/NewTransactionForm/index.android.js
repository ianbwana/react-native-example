import { useContext, useState, useEffect } from 'react';
import {
    View,
    Modal,
    Pressable,
    TextInput,
    Image,
    Keyboard,
    Text,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shared from '../../../styles/shared';
import Spacer from '../../../components/common/Spacer';
import { TransactionContext } from '../../../contexts/TransactionContext';
import modalStyles from '../../../components/modals/styles';
import styles from './styles';
import Button from '../../../components/common/Button';
import { lightText } from '../../../styles/variables';

const cancel = require('../../../../assets/cancel.png');

/**
 * @param {boolean} visible A checker for the visibility of the component.
 * @callback submit
 * @returns {ReactNode} A React form for creating new transactions.
 */
function NewTransactionForm({ visible, submit }) {
    const { toggleTransactionForm } = useContext(TransactionContext);

    const [amount, setAmount] = useState('');
    const [merchant, setMerchant] = useState('');
    const [created, setCreated] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [amountValid, setAmountValid] = useState(true);
    const [merchantValid, setMerchantValid] = useState(true);
    const [dateValid, setDateValid] = useState(true);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const clearForm = () => {
        setAmount(0.0);
        setMerchant('');
        setCreated('');
    };

    const handleConfirm = (date) => {
        Keyboard.dismiss();
        setDateValid(true);
        setCreated(date.toISOString().slice(0, 10));
        hideDatePicker();
    };

    const validateMerchant = () => {
        if (merchant.length === 0) {
            setMerchantValid(false);
            return false;
        }
        return true;
    };

    const validateAmount = () => {
        if (amount.length === 0) {
            setAmountValid(false);
            return false;
        }
        return true;
    };

    const validateDate = () => {
        if (created.length === 0) {
            setDateValid(false);
            return false;
        }
        return true;
    };

    const submitTransactionForm = () => {
        const validAmount = validateAmount();
        const validMerchant = validateMerchant();
        const validDate = validateDate();

        if (validAmount && validMerchant && validDate) {
            submit(merchant, parseFloat(amount).toFixed(2), created);
            toggleTransactionForm();
            clearForm();
        }
    };

    return (
        <Modal transparent visible={visible} onRequestClose={toggleTransactionForm}>
            <View style={modalStyles.modalOuterBackground}>
                <View style={[
                    modalStyles.modalInnerBackground,
                    isKeyboardVisible ?
                        styles.keyBoardOpenHeight :
                        styles.transactionModalHeight]}>
                    <View style={modalStyles.modalView}>
                        <View style={[shared.horizontal, shared.justifyContentFlexEnd]}>
                            <Pressable
                                onPress={() => {
                                    toggleTransactionForm();
                                    clearForm();
                                }}
                                style={[shared.centeredContent, shared.lightBackground, styles.closeButton]}>
                                <Image style={styles.closeButtonImage} source={cancel} />
                            </Pressable>
                        </View>
                        <Spacer topSpacing={20} />
                        <View style={[shared.horizontal, shared.flex, shared.alignItemsCenter, shared.ninthWidth]}>
                            <View
                                style={[
                                    shared.centeredContent,
                                    shared.rounded,
                                    shared.containerBorder,
                                    shared.ninthWidth,
                                    shared.maxWidth600,
                                    styles.transactionFormContainer]} >
                                <View>
                                    <Text style={styles.transactionFormTitle}>Create new Transaction</Text>
                                </View>
                                <Spacer topSpacing={20} />
                                <View style={[shared.innerContainer, shared.ninthWidth, shared.maxWidth400]}>
                                    <Text>Merchant</Text>
                                </View>

                                <TextInput
                                    onChangeText={(name) => {
                                        setMerchantValid(true);
                                        setMerchant(name);
                                    }}
                                    value={merchant}
                                    placeholder='Merchant Name'
                                    placeholderTextColor={lightText}
                                    style={[
                                        shared.containerBorder,
                                        shared.centeredContent,
                                        shared.innerContainer,
                                        shared.rounded,
                                        shared.textInput,
                                        styles.transactionInput,
                                        shared.ninthWidth,
                                        shared.maxWidth400,
                                    ]} />
                                <Spacer topSpacing={5} />
                                {merchantValid ? null : (
                                    <View style={[shared.innerContainer, shared.justifyContentFlexStart]}>
                                        <Text style={[shared.errorText]}>You have not entered a merchant name</Text>
                                    </View>
                                )}
                                <Spacer topSpacing={20} />
                                <View style={[shared.innerContainer, shared.ninthWidth, shared.maxWidth400]}>
                                    <Text>Amount</Text>
                                </View>

                                <TextInput
                                    onChangeText={(inputAmount) => {
                                        setAmountValid(true);
                                        setAmount(inputAmount);
                                    }}
                                    value={`${amount}`}
                                    inputMode='decimal'
                                    returnKeyType='done'
                                    placeholder='0.00'
                                    placeholderTextColor={lightText}
                                    style={[
                                        shared.containerBorder,
                                        shared.centeredContent,
                                        shared.innerContainer,
                                        shared.rounded,
                                        shared.textInput,
                                        styles.transactionInput,
                                        shared.ninthWidth,
                                        shared.maxWidth400,
                                    ]} />
                                <Spacer topSpacing={5} />
                                {amountValid ? null : (
                                    <View style={[shared.innerContainer, shared.justifyContentFlexStart]}>
                                        <Text style={shared.errorText}>You have not entered an amount</Text>
                                    </View>
                                )}
                                <Spacer topSpacing={20} />
                                <View style={[shared.innerContainer, shared.ninthWidth, shared.maxWidth400]}>
                                    <Text>Date Created</Text>
                                </View>

                                <View style={[shared.innerContainer, shared.ninthWidth, shared.maxWidth400, shared.centeredContent]}>
                                    <Pressable
                                        onPress={() => {
                                            Keyboard.dismiss();
                                            showDatePicker();
                                        }}
                                        style={[
                                            shared.fullWidth,
                                            shared.containerBorder,
                                            shared.rounded,
                                            shared.justifyContentCenter,
                                            styles.dateInputContainer,
                                        ]} >
                                        <Text style={created ? shared.darkText : lightText}>{created.length > 0 ? created : 'YYYY-MM-DD'}</Text>
                                        <DateTimePickerModal
                                            isVisible={isDatePickerVisible}
                                            mode='date'
                                            onConfirm={handleConfirm}
                                            onCancel={hideDatePicker} />
                                    </Pressable>
                                </View>
                                <Spacer topSpacing={5} />
                                {dateValid ? null : (
                                    <View style={[shared.innerContainer, shared.justifyContentFlexStart]}>
                                        <Text style={shared.errorText}>You have not entered a date</Text>
                                    </View>
                                )}
                                <Spacer topSpacing={20} />
                                <Button buttonText='CONTINUE' onPress={submitTransactionForm} />
                                <Spacer topSpacing={20} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default NewTransactionForm;
