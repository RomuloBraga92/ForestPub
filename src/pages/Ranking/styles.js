import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 0 30px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 70px;
`;

export const BigImageContainer = styled.TouchableOpacity`
  width: 100%;
  margin: 0 auto;
`;

export const HighlightedContainer = styled.Image`
  width: 100%;
  border-radius: 10px;
  height: 200px;
  margin-top: 10px;
`;

export const ChecksContainer = styled.View`
  width: 60px;
  height: 40px;
  background: #f4f4f4;
  border-radius: 10px;
  position: absolute;
  bottom: 40px;
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

export const BigPubName = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_400Regular';
  color: #5B271F;
  text-align: center;
`;

export const PubBlockContainer = styled.TouchableOpacity`
  width: 50%;
  margin-top: 30px;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
`;

export const PubBlock = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const PubName = styled.Text`
  font-size: 15px;
  color: #5B271F;
  font-family: 'Poppins_400Regular';
  text-align: center;
`;


