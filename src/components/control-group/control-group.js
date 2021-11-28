import React from 'react';
// Props
import {propTypes, defaultProps} from './props';
import {ControlGroupWrapper, Row} from './styled';
import {IconCircle} from '../icon-circle';
import {colors} from '../../theme';
/**
 * ControlGroup Component
 */
export const ControlGroup = ({onIconPress, backgroundColor}) => (
  <ControlGroupWrapper onPress={onIconPress} backgroundColor={backgroundColor}>
    <Row>
      <IconCircle
        backgroundColor={colors.lightestGrey}
        color={colors.white}
        name="ios-airplane"
      />
      <IconCircle
        backgroundColor={colors.lightestGrey}
        color={colors.white}
        name="ios-radio-outline"
      />
    </Row>
    <Row>
      <IconCircle
        backgroundColor={colors.white}
        color={colors.lightGrey}
        name="wifi"
      />
      <IconCircle
        backgroundColor={colors.white}
        color={colors.lightGrey}
        name="bluetooth"
      />
    </Row>
  </ControlGroupWrapper>
);

ControlGroup.propTypes = propTypes;
ControlGroup.defaultProps = defaultProps;
