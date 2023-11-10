import { View } from 'react-native';

/**
 * Component for spacing between two elements in a view
 *
 * @param {number} leftSpacing The margin on the left side of the element.
 * @param {number} rightSpacing The margin on the right side of the element.
 * @param {number} bottomSpacing The margin on the bottom of the element.
 * @param {number} topSpacing The margin on the top of the element.
 */
function Spacer(props) {
    const {
        rightSpacing, leftSpacing, topSpacing, bottomSpacing,
    } = props;
    return (
      <View
          style={{
                marginLeft: leftSpacing || 0,
                marginRight: rightSpacing || 0,
                marginTop: topSpacing || 0,
                marginBottom: bottomSpacing || 0,
            }}
        />
    );
}

export default Spacer;
