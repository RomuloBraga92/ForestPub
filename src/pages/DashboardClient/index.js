import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {FontAwesome as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import * as Location from 'expo-location';

import api from '../../services/api';
import tree from '../../assets/arvre-somos-nozes.png';
import {
  Container,
  ClientHeader,
  MapContainer,
  Title,
  MenuContainer,
  MenuItem,
  MenuButton,
  MenuTitle
} from './styles';


export default function DashboardClient(){
  const [initialPosition, setInitialPosition] = useState([0,0]);
  const [pubs, setPubs] = useState([]);
  const [user, setUser] = useState([]);

  const navigation = useNavigation();

  const handleNavigationMarkerDetail = useCallback((id)=>{
    navigation.navigate('MarkerDetail', {pub_id:id});
  },[navigation])

  const handleNavigationProfile = useCallback(()=>{
    navigation.navigate('ProfileClient');
  },[navigation])

  const handleNavigationLogOut = useCallback(()=>{
    navigation.navigate('SignIn');
  },[navigation])

  const handleNavigationChooseAwards = useCallback(()=>{
    navigation.navigate('ChooseAwards')
  },[navigation])

  const handleNavigationRanking = useCallback(()=>{
    navigation.navigate('Ranking');
  },[navigation])


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

  useEffect(() => {
    api.get('/pubs').then(response=>{
      const {data} = response;
      setPubs(data);

    api.get('/users/1').then(response=>{
      const {data} = response;
      setUser(data);
    })
    })
  },[])

  return(
    <Container>
      <ClientHeader>
        <Title>{`Bem Vindo, ${user.name}`}</Title>
        <MenuContainer>
          <MenuItem>
            <MenuButton onPress={handleNavigationRanking}>
              <Icon name='trophy' size={20} color='#fff'/>
            </MenuButton>
            <MenuTitle>Ranking</MenuTitle>
          </MenuItem>
          <MenuItem>
            <MenuButton onPress={handleNavigationChooseAwards}>
              <Icon name='star' size={20} color='#fff'/>
            </MenuButton>
            <MenuTitle>Prêmios</MenuTitle>
          </MenuItem>
          <MenuItem>
            <MenuButton onPress={handleNavigationProfile}>
              <Icon name='user' size={20} color='#fff'/>
            </MenuButton>
            <MenuTitle>Perfil</MenuTitle>
          </MenuItem>
          <MenuItem>
            <MenuButton onPress={handleNavigationLogOut}>
              <Icon name='sign-out' size={20} color='#fff'/>
            </MenuButton>
            <MenuTitle>Sair</MenuTitle>
          </MenuItem>
        </MenuContainer>
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
          {pubs.map(pub=>(
            <Marker
            key={pub.id}
            coordinate={{
            latitude: pub.latitude,
            longitude: pub.longitude,
            }}
            onPress={()=>handleNavigationMarkerDetail(pub.id)}
            title={pub.name}
            description={`${pub.street}, ${pub.number}, ${pub.district}, ${pub.city} - ${pub.uf}`}
            image={tree}
          />
          ))}
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
    width: 50,
    height: 50,
    textAlign: 'center',
    resizeMode: 'cover',
  },

})
