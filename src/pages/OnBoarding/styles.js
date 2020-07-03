import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 70px 0;
`;

export const Logo = styled.Image`
  flex:1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 270px;
`;

export const BackgroundText = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #f4f4f4;
  max-width: 350px;
  text-align: center;
  font-family: 'Poppins_400Regular';
  margin-bottom: 30px;
`;

export const RegisterButton = styled.TouchableOpacity``;

export const RegisterText = styled.Text`
  font-size: 14px;
  color: #f4f4f4;
`;
