import styled from 'styled-components/native';
import {colors} from '../../theme';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

export const MusicControllerWrapper = styled.TouchableOpacity`
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
  margin: 15px;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: ${colors.lightestGrey};
  font-size: 18px;
  font-weight: 700;
`;

export const StyledIcon = styled(Icon)`
  margin: 10px;
`;

export const TopIconContainer = styled.View`
  justify-content: flex-end;
  align-self: flex-end;
  margin-bottom: 10px;
`;
