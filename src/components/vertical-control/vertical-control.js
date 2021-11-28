import React, {useState} from 'react';
// Props
import {propTypes, defaultProps} from './props';
import {VerticalControlWrapper, StyledIcon} from './styled';
import {colors} from '../../theme';
import VerticalSlider from 'rn-vertical-slider';
/**
 * VerticalControl Component
 */
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const VerticalControl = ({onIconPress, name, backgroundColor}) => {
  const [value, setValue] = useState(45);
  return (
    <VerticalControlWrapper
      onPress={onIconPress}
      backgroundColor={backgroundColor}>
      <VerticalSlider
        value={value}
        disabled={false}
        min={0}
        max={100}
        onChange={(value: number) => setValue(value)}
        width={windowWidth * 0.18}
        height={windowWidth * 0.39}
        step={1}
        borderRadius={20}
        minimumTrackTintColor={colors.white}
        maximumTrackTintColor={'rgba(12,28,41,0.5)'}
      />
      <StyledIcon color={colors.lightGrey} size={30} name={name} />
    </VerticalControlWrapper>
  );
};

VerticalControl.propTypes = propTypes;
VerticalControl.defaultProps = defaultProps;
