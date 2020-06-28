import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const ClientHeader = styled.View`
  padding-top: ${20 + getStatusBarHeight()}px;
  align-items: center;
`;

export const ClientHeaderText = styled.Text`
  font-size: 18px;
  line-height: 20px;
  margin-top: 8px;
  font-family: 'Roboto_400Regular';
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_400Regular';
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const MenuContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 32px;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItem = styled.TouchableOpacity`
  background-color: #fff;
  border-width: 2px;
  border-color: #eee;
  height: 120;
  width: 30%;
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 16px;
  align-items: center;
  justify-content: center;
`;

export const MenuItemName = styled.Text`
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  margin-top: 8px;
`;


