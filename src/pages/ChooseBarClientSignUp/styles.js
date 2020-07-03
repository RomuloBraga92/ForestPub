import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-family: 'Poppins_500Medium';
  color: #f4f4f4;
`;

export const BlocksContainer = styled.View`
  flex-direction: row;
  max-width: 500px;
  align-items: center;
  justify-content: space-between;
`;

export const BlockContainer = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
`;

export const Block = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin-top: 70px;
`;

export const BlockText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  margin-top: 8px;
  color: #f4f4f4;
`;

