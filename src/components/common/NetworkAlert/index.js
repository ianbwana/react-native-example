import { View, Text } from 'react-native';
import shared from '../../../styles/shared';

/**
 * This component renders an alert at the top of the screen if the devices is not connected.
 *
 * @returns {ReactNode} A React component that informs the user on the network availability.
 */
function NetworkAlert() {
  return (
    <View style={[shared.fullWidth, shared.centeredContent, shared.networkBar]}>
      <Text>You are currently not connected to the internet</Text>
    </View>
  );
}

export default NetworkAlert;
