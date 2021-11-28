import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const ControlGroupWrapper = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 20px;
  background-color: 'rgba(12,28,41,0.5)';
  height: ${windowWidth * 0.4}px;
  width: ${windowWidth * 0.4}px;
  align-items: center;
  justify-content: center;
  margin-vertical: 10px;
  margin-left: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
`;
