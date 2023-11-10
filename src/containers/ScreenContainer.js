import {
    useContext,
    useEffect,
    useState,
} from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import NetworkAlert from '../components/common/NetworkAlert';
import Loader from '../components/modals/Loader';
import { LoadingContext } from '../contexts/LoadingContext';
import { NetworkContext } from '../contexts/NetworkContext';
import { AlertContext } from '../contexts/AlertContext';
import AlertModal from '../components/modals/AlertModal';
import styles from './styles';
import shared from '../styles/shared';

function ScreenContainer(props) {
    const { centeredVertical, centeredHorizontal, children } = props;
    const [isOffline, setOfflineStatus] = useState(false);
    const { loading, loadingText } = useContext(LoadingContext);
    const { visible, alertText } = useContext(AlertContext);
    const { setIsConnected } = useContext(NetworkContext);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
            setIsConnected(offline);
        });
        return () => removeNetInfoSubscription();
    }, []);

    return (
        <>
            <SafeAreaView style={[shared.fullHeight, shared.statusBar]}>
                {isOffline && <NetworkAlert />}
                <KeyboardAvoidingView
                    behavior='height'
                    style={[
                        shared.fullHeight,
                        shared.fullWidth,
                        centeredHorizontal ? styles.justifiedCenter : styles.justifiedStart,
                        centeredVertical ? styles.alignedCenter : styles.alignedStart,
                        styles.viewColor
                    ]}
                >
                    {children}
                </KeyboardAvoidingView>
            </SafeAreaView>
            <Loader loading={loading} content={loadingText} />
            <AlertModal visible={visible} content={alertText} />
        </>
    );
}

export default ScreenContainer;
