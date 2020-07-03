import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 0 20px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 70px;

`;

export const Title = styled.Text`
  font-size: 40px;
  color: #f4f4f4;
  font-family: 'Poppins_500Medium';
  margin: 24px auto;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  position: relative;
`;

export const Level = styled.View`
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  bottom: 0;
  right: 25%;
  width: 60px;
  height: 40px;
  border-color: #5B271F;
  border-width: 1px;
  background: #f4f4f4;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const LevelText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_500Medium';
  color: #5B271F;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 93px;
  align-self: center;
`;

