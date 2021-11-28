import React from 'react';
// Props
import {propTypes, defaultProps} from './props';
import {
  MusicControllerWrapper,
  Row,
  StyledText,
  StyledIcon,
  TopIconContainer,
} from './styled';

import {colors} from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
/**
 * MusicController Component
 */
export const MusicController = ({onIconPress, backgroundColor}) => (
  <MusicControllerWrapper
    onPress={onIconPress}
    backgroundColor={backgroundColor}>
    <TopIconContainer>
      <Icon color={colors.white} name="wifi" size={20} />
    </TopIconContainer>
    <StyledText> Not Playing </StyledText>
    <Row>
      <StyledIcon color={colors.lightestGrey} name="play-back" size={20} />
      <StyledIcon color={colors.white} name="play" size={30} />
      <StyledIcon color={colors.lightestGrey} name="play-forward" size={20} />
    </Row>
  </MusicControllerWrapper>
);

MusicController.propTypes = propTypes;
MusicController.defaultProps = defaultProps;
