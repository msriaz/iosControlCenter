import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;

export const ControlItemWrapper = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: 'rgba(12,28,41,0.5)';
  height: ${windowWidth * 0.18}px;
  width: ${windowWidth * 0.18}px;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  margin-top: 10px;
`;

export const StyledIcon = styled(Icon)`
  margin: 10px;
`;
