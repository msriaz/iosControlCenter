import styled from 'styled-components/native';

export const IconWrapper = styled.TouchableOpacity`
  background-color: ${({backgroundColor}) => backgroundColor};
  margin: 6px;
  border-radius: 25px;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;
