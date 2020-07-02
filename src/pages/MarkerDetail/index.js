import React, {useCallback, useState, useEffect, useMemo} from 'react';
import {FontAwesome as Icon} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

import api from '../../services/api';
import {
Container,
Header,
BackButton,
BackButtonText,
Content,
BarImage,
BarName,
BarAddress,
ChecksContainer,
ChecksText,
CheckInButton,
CheckInButtonText,
ScanCodeButton,
ButtonsContainer,
} from './styles';


export default function MarkerDetail(){
  const [currentPosition, setCurrentPosition] = useState([0,0]);
  const [user, setUser] = useState({});
  const [pubPosition, setPubPosition] = useState([0,0]);
  const [checkin, setCheckin] = useState(false);
  const [pubData, setPubData] = useState({})

  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params;

  useEffect(()=>{
    async function loadPosition(){
      const location = await Location.getCurrentPositionAsync();

      const {latitude, longitude} = location.coords;
      const userLatitude = latitude.toFixed(2);
      const userLongitude = longitude.toFixed(2);

      setCurrentPosition([
        userLatitude,
        userLongitude,
      ])
    }
    loadPosition();
  },[])

  useEffect(()=>{
    api.get(`/pubs/${routeParams.pub_id}`).then(response=>{
      const {data} = response;
      setPubData(data);
    })
  },[])

  useEffect(()=>{
    api.get('/users/1').then(response=>{
      const {data} = response;
      setUser(data);
    })
  },[])

  useEffect(()=>{
    async function getPosition(){
    const rua = pubData.street + ', ' + pubData.number;

    const location = await Location.geocodeAsync(rua);
    const pubLatitude = location[0].latitude.toFixed(2);
    const pubLongitude = location[0].longitude.toFixed(2);

    setPubPosition([
      pubLatitude,
      pubLongitude,
    ])
    }
    getPosition();
  },[pubData])

  const handleBackNavigation = useCallback(()=>{
    navigation.goBack();
  },[])

  const handleUncheckIn = useCallback(()=>{
    setCheckin(false);
  },[])

  const handleCheckIn = useCallback(async ()=>{
    if(currentPosition[0] !== pubPosition[0] && currentPosition[1] !== pubPosition[1]){
      Alert.alert('Erro no check-in', 'Vá para o bar selecionado para realizar o check-in')
    }

    if(currentPosition[0] === pubPosition[0] && currentPosition[1] === pubPosition[1]){
      Alert.alert('Sucesso', 'Seus pontos foram creditados!');
      setCheckin(true);

      setTimeout(handleUncheckIn, 5000);
    }
  },[])

  const handleCameraClick = useCallback(()=>{
    navigation.navigate('ScanCode');
  },[])

  return(
    <Container>
      <Header>
        <BackButton onPress={handleBackNavigation}>
          <Icon name='chevron-left' size={30} color='#bbb' />
        </BackButton>
      </Header>

      <Content>
        <BarImage>
          <ChecksContainer>
            <Icon name='user' size={20} color='#999591'/>
            <ChecksText>{pubData.checkins}</ChecksText>
          </ChecksContainer>
        </BarImage>
        <BarName>{pubData.name}</BarName>
        <BarAddress>{`${pubData.street}, ${pubData.number}, ${pubData.district}, ${pubData.city} - ${pubData.uf}`}</BarAddress>
        <ButtonsContainer>
          <CheckInButton onPress={handleCheckIn} disabled={checkin}>
            <CheckInButtonText>Fazer check-in</CheckInButtonText>
          </CheckInButton>
          <ScanCodeButton onPress={handleCameraClick} disabled={!checkin}>
            <Icon name='barcode' size={20} color='#fff'/>
          </ScanCodeButton>
        </ButtonsContainer>
      </Content>


    </Container>
  )
}
