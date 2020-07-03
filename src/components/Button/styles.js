import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 300px;
  height: 60px;
  background: #FFC44A;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 20px;
  color: #5B271F;
`;


