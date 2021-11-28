import styled from 'styled-components/native';
import {colors} from '../../theme';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const HorizontalControlWrapper = styled.View`
  border-radius: 20px;
  background-color: 'rgba(12,28,41,0.5)';
  height: ${windowWidth * 0.17}px;
  width: ${windowWidth * 0.39}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 12px;
  margin-vertical: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const StyledText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 400;
`;
