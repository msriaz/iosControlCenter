import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Wrapper = styled.View`
  justify-content: center;
  align-self: center;
`;
