import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const Header = styled.View`
  padding-top: ${20 + getStatusBarHeight()}px;
  align-items: flex-start;
  margin: 30px 0px;
  flex-direction: row;

`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const BackButtonText = styled.Text`
  font-size: 20px;
  color: black;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 100px;
`;

export const BarImage = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background: #ccc;
`;

export const BarName = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_500Medium';
  text-align: center;
  margin-top: 20px;
`;

export const BarAddress = styled.Text`
  font-size: 16px;
  font-family: 'Roboto_400Regular';
  text-align: center;
  margin-top: 10px;
`;

export const CheckInButton = styled.TouchableOpacity`
  width: 180px;
  height: 60px;
  border-radius: 10px;
  background: #0000ff;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.2 : 1}
`;

export const CheckInButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_400Regular';
  color: #fff;
`;

export const ScanCodeButton = styled.TouchableOpacity`
  width: 180px;
  height: 60px;
  border-radius: 10px;
  background: #0000ff;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.2 : 1}
`;

export const ScanCodeButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_400Regular';
  color: #fff;
  text-align: center;

`;


