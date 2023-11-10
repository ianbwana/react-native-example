import {
    View,
    Modal,
    ActivityIndicator,
    Text,
} from 'react-native';
import modalStyles from './styles';
import shared from '../../styles/shared';

function Loader({ loading, content }) {
    return (
        <Modal
            transparent
            animationType='none'
            visible={loading}
            onRequestClose={() => { }}
        >
            <View style={modalStyles.modalOuterBackground}>
                <View style={[modalStyles.modalInnerBackground, {
                    height: 100,
                }]}
                >
                    <View style={modalStyles.modalView}>
                        <View style={[
                            shared.horizontal,
                            shared.flex,
                            shared.alignItemsCenter,
                            modalStyles.modalWidth
                        ]}
                        >

                            <View style={shared.flex}>
                                <ActivityIndicator
                                    animating={loading}
                                    size='large'
                                    color='#03D47C'
                                />
                            </View>
                            <View style={{ flex: 3, paddingLeft: 20 }}>
                                <Text style={shared.darkText}>{content}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default Loader;
