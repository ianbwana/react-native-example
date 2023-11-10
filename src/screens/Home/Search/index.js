import {
    View,
    Pressable,
    TextInput,
    Image,
} from 'react-native';
import shared from '../../../styles/shared';
import { lightText } from '../../../styles/variables';
import styles from './styles';

const cancel = require('../../../../assets/cancel.png');

/**
 * A search component for finding transactions by matching text
 *
 * @component
 * @example
 * return (
 *   <Search />
 * )
 */
function Search({
    handleChange, value, handleClear, search,
}) {
    return (
        <View
            style={[
                shared.centeredContent,
                shared.flex,
                shared.horizontal,
                shared.rounded,
                shared.seventhWidth,
                shared.lightGrayBackground,
            ]}>
            <TextInput
                style={[shared.rounded, styles.searchBar]}
                onChangeText={handleChange}
                value={value}
                placeholderTextColor={lightText}
                underlineColorAndroid='transparent'
                placeholder='Search transactions by merchant name' />
            {search && (
                <Pressable onPress={handleClear} style={[shared.justifyContentFlexEnd, shared.alignItemsFlexEnd]}>
                    <Image style={styles.searchBarCloseImage} source={cancel} />
                </Pressable>
            )}
        </View>
    );
}

export default Search;
