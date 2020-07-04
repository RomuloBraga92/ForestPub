import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 70px;
  margin-left: 20px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: 'Poppins_500Medium';
  color: #f4f4f4;
`;

export const MiniTitle = styled.Text`
  font-size: 25px;
  font-family: 'Poppins_400Regular';
  color: #f4f4f4;
  margin-top: 10px;
`;

export const Content = styled.View`
  margin-top: 20px;
`;

export const AwardRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AwardBlockContainer = styled.TouchableOpacity`
  flex-direction: column;
  margin-left: 10px;
  align-items: center;
  justify-content: center;

`;

export const AwardBlock = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin: 6px 20px;

  opacity: ${props => props.disabled ? 0.5 : 1}
`;

export const AwardRank = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_500Medium';
  margin-bottom: 25px;
  color: #f4f4f4;
`;


//#FFC44A
//#5B271F
//#6A9B14
