import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {FontAwesome5 as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import * as Location from 'expo-location';

import {Container,
  ClientHeader,
  MapContainer,
  AwardButton,
  AvatarButton,
  AvatarImage,
  MenuButton,
  ScanCodeButton,
} from './styles';


export default function DashboardClient(){
  const [initialPosition, setInitialPosition] = useState([0,0]);

  const navigation = useNavigation();

  const handleNavigationMarkerDetail = useCallback(()=>{
    navigation.navigate('MarkerDetail');
  },[])

  const handleProfileNavigation = useCallback(()=>{
    navigation.navigate('ProfileClient');
  },[])

  useEffect(()=>{
    async function loadPosition(){
      const {status} = await Location.requestPermissionsAsync();

      if(status !== 'granted'){
        Alert.alert('Eita!', 'Precisamos de permissão para obter sua localização!');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const {latitude, longitude} = location.coords;

      setInitialPosition([
        latitude,
        longitude,
      ])
    }
    loadPosition();
  },[])

  const handleCameraClick = useCallback(()=>{
    navigation.navigate('ScanCode');
  },[])

  return(
    <Container>
      <ClientHeader>
        <MenuButton onPress={()=>{}}>
        <Icon name="bars" size={30} color='black'/>
        </MenuButton>

        <AvatarButton onPress={handleProfileNavigation}>
          <AvatarImage/>
        </AvatarButton>
      </ClientHeader>

      <MapContainer>
          {initialPosition[0] !== 0 && (
            <MapView style={styles.map}
          initialRegion={{
            latitude: initialPosition[0],
            longitude: initialPosition[1],
            latitudeDelta: 0.014,
            longitudeDelta: 0.014,
          }}
          >
          <Marker
          coordinate={{
            latitude: -23.0250808,
            longitude: -43.4905615,
          }}
          onPress={handleNavigationMarkerDetail}
          title="Bar do zé"
          description="Endereco"
          />
          <Marker
          coordinate={{
            latitude: -23.050389,
            longitude: -43.4905615,
          }}
          onPress={handleNavigationMarkerDetail}
          title="Bar do marco"
          description="Endereco"
          />
          <AwardButton>
            <Icon name='trophy' size={25} color='#fff'/>
          </AwardButton>
          <ScanCodeButton onPress={handleCameraClick}>
            <Icon name='camera' size={25} color='#fff'/>
          </ScanCodeButton>
          </MapView>
          )}
      </MapContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 120,
    height: 100,
    textAlign: 'center',
  },

})
