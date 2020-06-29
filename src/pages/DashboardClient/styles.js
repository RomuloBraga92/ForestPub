import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ClientHeader = styled.View`
  padding-top: ${20 + getStatusBarHeight()}px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 20px;
`;

export const MenuButton = styled.TouchableOpacity``;

export const AvatarButton = styled.TouchableOpacity``;

export const AvatarImage = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #ccc;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
  position: relative;
`;

export const AwardButton = styled(RectButton)`
  width: 50px;
  height: 50px;
  background: #0000FF;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 150px;
  right: 50px;
`;

export const ScanCodeButton = styled(RectButton)`
  width: 50px;
  height: 50px;
  background: #0000FF;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 90px;
  right: 50px;
`;


