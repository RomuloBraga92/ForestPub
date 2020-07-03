import styled from 'styled-components/native';

export const OutsideContainer = styled.ImageBackground`
  flex: 1;
`;

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
  height: 250px;
  border-width: 2px;
  border-color: #FFC44A;
  border-radius: 20px;
  flex-direction: column;
  margin-top: 12px;
  background-color: #f4f4f4;
`;

export const HighlightedContainer = styled.Image`
  width: 100%;
  height: 125px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  height: 125px;
  flex-direction: row;
  align-items: center;
`;

export const ChecksContainer = styled.View`
  width: 60px;
  height: 40px;
  border-width: 1px;
  background-color: #f4f4f4;
  border-color: #FFC44A;
  border-radius: 10px;
  position: absolute;
  bottom: 40px;
  right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
`;

export const BarInfoContainer = styled.View`
  flex-direction: column;
  margin-left: 15px;
  align-items: flex-start;
  max-width: 70%;
`;

export const ChecksText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color: #5B271F;
`;

export const BigPubName = styled.Text`
  font-size: 22px;
  flex-wrap: wrap;
  font-family: 'Poppins_500Medium';
  color: #5B271F;
  text-align: center;
`;

export const BigPubAddress = styled.Text`
  color: #5B271F;
  font-size: 15px;
`;

export const PubsContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 150px;
  margin-top: 15px;
`;

export const PubBlockContainer = styled.View`
  width: 90%;
  height: 150px;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: #FFC44A;
  border-radius: 20px;
  background: #f4f4f4;
`;

export const PubContent = styled.View`
  width: 100%;
  margin-top: 20px;
  height: 75px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px;
`;

export const PubBlock = styled.Image`
  width: 100%;
  height: 75px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const PubInfoContainer = styled.View`
  max-width: 60%;
  margin-left: 8px;
  justify-content: space-between;
  padding: 0 6px;
`;

export const PubName = styled.Text`
  font-size: 12px;
  color: #5B271F;
  font-family: 'Poppins_400Regular';
`;


