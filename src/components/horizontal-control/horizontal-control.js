import React from 'react';

// Props
import {propTypes, defaultProps} from './props';
import {HorizontalControlWrapper, StyledText} from './styled';
import {IconCircle} from '../icon-circle';
import {colors} from '../../theme';
/**
 * HorizontalControl Component
 */
export const HorizontalControl = ({onIconPress}) => {
  return (
    <HorizontalControlWrapper onPress={onIconPress}>
      <IconCircle
        backgroundColor={colors.transparent}
        color={colors.white}
        name="ios-moon"
      />
      <StyledText>Focus</StyledText>
    </HorizontalControlWrapper>
  );
};

HorizontalControl.propTypes = propTypes;
HorizontalControl.defaultProps = defaultProps;
