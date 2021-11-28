import React from 'react';
// Props
import {propTypes, defaultProps} from './props';
import {ControlItemWrapper, StyledIcon} from './styled';
import {colors} from '../../theme';
/**
 * ControlItem Component
 */
export const ControlItem = ({onIconPress, name, backgroundColor}) => (
  <ControlItemWrapper onPress={onIconPress} backgroundColor={backgroundColor}>
    <StyledIcon color={colors.white} name={name} size={25} />
  </ControlItemWrapper>
);

ControlItem.propTypes = propTypes;
ControlItem.defaultProps = defaultProps;
