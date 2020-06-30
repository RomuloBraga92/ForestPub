import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: 'Poppins_500Medium'
  color: #999591;
`;

export const Content = styled.View`
  margin-top: 30px;
`;

export const AwardRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AwardBlockContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
  align-items: center;
  justify-content: center;

`;

export const AwardBlock = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  background: #999591;
  border-radius: 10px;
  margin: 6px 20px;
`;

export const AwardRank = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  margin-bottom: 15px;
  color: #999591;
`;
