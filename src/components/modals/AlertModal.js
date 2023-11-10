import { useContext } from 'react';
import {
    View, Modal, Image, Text,
} from 'react-native';
import { AlertContext } from '../../contexts/AlertContext';
import shared from '../../styles/shared';
import Spacer from '../common/Spacer';
import modalStyles from './styles';
import ButtonSmall from '../common/ButtonSmall';

const success = require('../../../assets/success.png');
const failure = require('../../../assets/failure.png');
const warning = require('../../../assets/failure.png');

function AlertModal({ visible, content }) {
    const { alertType, closeAlert } = useContext(AlertContext);
    return (
        <Modal transparent animationType='none' visible={visible}>
            <View style={modalStyles.modalOuterBackground}>
                <View style={[modalStyles.modalInnerBackground, modalStyles.alertModalHeight]}>
                    <View style={modalStyles.modalView}>
                        <View style={[shared.flex, shared.alignItemsCenter, modalStyles.modalWidth]}>
                            <View style={shared.flex}>
                                <Image
                                    source={alertType === 'success' ? success : alertType === 'failure' ? failure : warning}
                                    style={modalStyles.alertModalImage}
                                />
                            </View>
                            <Spacer topSpacing={10} />
                            <View>
                                <Text style={[shared.textCenter, shared.darkText]}>
                                    {content}
                                </Text>
                            </View>
                            <Spacer topSpacing={20} />
                            <ButtonSmall buttonType={alertType} buttonText='OK' onPress={closeAlert} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default AlertModal;
