import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ClientHeader = styled.View`
  padding-top: ${20 + getStatusBarHeight()}px;
  margin: 5px 20px;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-family: 'Poppins_700Bold';
  color: #5B271F;
`;

export const MenuContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  margin-bottom: 10px;
`;

export const MenuItem = styled.View`
  align-items: center;
  justify-content: center;
`;
export const MenuButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-width: 3px;
  border-color: #FFC44A;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
`;

export const MenuIcon = styled.Image`
  width: 81px;
  height: 81px;
  align-items: center;
  justify-content: center;
`;

export const MenuTitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color:  #5B271F;
  margin-top: 10px;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;



