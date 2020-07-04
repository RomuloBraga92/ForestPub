import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  padding-top: ${20 + getStatusBarHeight()}px;
  align-items: flex-start;
  margin: 20px 20px;
  flex-direction: row;

`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 60%;
`;

export const BarImage = styled.Image`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

export const ChecksContainer = styled.View`
  width: 60px;
  height: 40px;
  background: #f4f4f4;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
`;

export const ChecksText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color: #5B271F;
`;

export const BarName = styled.Text`
  font-size: 30px;
  font-family: 'Poppins_500Medium';
  color: #5B271F;
  margin-top: 10px;
`;

export const BarAddress = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_400Regular';
  color: #5B271F;
  max-width: 350px;
`;

export const CheckInButton = styled.TouchableOpacity`
  width: 180px;
  height: 60px;
  border-radius: 10px;
  background: #FFC44A;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

export const CheckInButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_400Regular';
  color: #5B271F;
`;

export const ScanCodeButton = styled.TouchableOpacity`
  width: 70px;
  height: 60px;
  border-radius: 10px;
  background: #FFC44A;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.5 : 1};
`;


export const ButtonsContainer = styled.View`
  flex-direction: row;
  width: 300px;
  align-items: center;
  justify-content: space-between;
`;

export const ScanCodeIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  margin-top: 25px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const RatingMail = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingMailText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color: #5B271F;
`;

export const RatingText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color: #5B271F;
`;

export const RatingButton = styled.TouchableOpacity``;

//#FFC44A
//#5B271F
//#6A9B14
