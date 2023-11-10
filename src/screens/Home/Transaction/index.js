import { PureComponent } from 'react';
import {
    View,
    Text,
} from 'react-native';
import shared from '../../../styles/shared';
import styles from './styles';
import Spacer from '../../../components/common/Spacer';

/**
 * 
 * @param {number} amount The numerical value of the transaction
 * @param {string} merchant The name of the merchant who's transaction it is
 * @param {string} created The date the transaction was created
 * @param {string} transactionID The unique identifier of each transaction
 * @param {string} newest A custom field to show whether a transaction was the last to be added to the list
 * 
 */
class Transaction extends PureComponent {
    render() {
        const {
            amount, merchant, created, transactionID, newest,
        } = this.props;

        return (
            <View
                key={transactionID}
                style={[
                    shared.innerContainer,
                    shared.rounded,
                    shared.justifyContentCenter,
                    styles.transactionContainer,
                    newest ? styles.newestTransaction : null,
                ]}
            >
                <View style={[shared.horizontal, shared.justifyContentSpaceBetween]}>
                    <View style={[styles.titleContainer, styles.topLeftRounded]}>
                        <Text style={[shared.smallText, styles.titleText]}>MERCHANT :</Text>
                    </View>
                    <View style={[styles.valueContainer, styles.topRightRounded]}>
                        <Text style={[shared.flex, styles.valueText, shared.smallTextExtraBold]}>{merchant || 'No Name'}</Text>
                    </View>
                </View>
                <Spacer topSpacing={5} />
                <View style={[shared.horizontal, shared.justifyContentSpaceBetween]}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>AMOUNT :</Text>
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={[shared.smallTextExtraBold, styles.valueText]}>{amount || 0}</Text>
                    </View>
                </View>
                <Spacer topSpacing={5} />
                <View style={[shared.horizontal, shared.justifyContentSpaceBetween]}>
                    <View
                        style={[styles.titleContainer, styles.bottomLeftRounded]}>
                        <Text style={[shared.smallText, styles.titleText]}>DATE CREATED :</Text>
                    </View>
                    <View style={[styles.valueContainer, styles.bottomRightRounded]} >
                        <Text style={[shared.smallTextExtraBold, styles.valueText]}>{created || 'No Date'}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Transaction;
