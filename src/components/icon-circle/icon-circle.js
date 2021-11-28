import React, {Fragment} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// Props
import {propTypes, defaultProps} from './props';
import {IconWrapper} from './styled';
/**
 * IconCircle Component
 */
export const IconCircle = ({
  color,
  onIconPress,
  size,
  name,
  backgroundColor,
}) => (
  <Fragment>
    <IconWrapper onPress={onIconPress} backgroundColor={backgroundColor}>
      <Icon name={name} size={size} color={color} />
    </IconWrapper>
  </Fragment>
);

IconCircle.propTypes = propTypes;
IconCircle.defaultProps = defaultProps;
