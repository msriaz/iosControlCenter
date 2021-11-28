import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const VerticalControlWrapper = styled.View`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  margin-vertical: 10px;
  background-color: transparent;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: 20px;
`;
