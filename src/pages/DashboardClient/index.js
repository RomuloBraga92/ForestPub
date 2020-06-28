import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import {Feather as Icon} from '@expo/vector-icons';

import {Container, ClientHeader, ClientHeaderText, UserName, MapContainer, MenuContainer, MenuItem, MenuItemName} from './styles';


export default function DashboardClient(){
  return(
    <Container>
      <ClientHeader>
        <ClientHeaderText>Bem-vindo,</ClientHeaderText>
        <UserName>Romulo</UserName>
      </ClientHeader>

      <MapContainer>
          <MapView style={styles.map}/>
      </MapContainer>

      <MenuContainer>
        <MenuItem>
          <Icon name="user" size={20} color="#aaa"/>
          <MenuItemName>Perfil</MenuItemName>
        </MenuItem>
        <MenuItem>
          <Icon name="award" size={20} color="#aaa"/>
          <MenuItemName>Prêmios</MenuItemName>
        </MenuItem>
        <MenuItem>
          <Icon name="camera" size={20} color="#aaa"/>
          <MenuItemName>Cadastrar produto</MenuItemName>
        </MenuItem>
      </MenuContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: '#34CB79',
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center'
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    fontSize: 13,
    lineHeight: 23,
  },
})
