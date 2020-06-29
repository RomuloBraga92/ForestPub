import React, {useCallback, useState, useEffect} from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as Location from 'expo-location';

import {
Container,
Header,
BackButton,
BackButtonText,
Content,
BarImage,
BarName,
BarAddress,
CheckInButton,
CheckInButtonText
} from './styles';
import { Alert } from 'react-native';

export default function MarkerDetail(){
  const [currentPosition, setCurrentPosition] = useState([0,0]);
  const [barPosition, setBarPosition] = useState([0,0]);

  const navigation = useNavigation();

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
    async function getPosition(){
    const rua = 'Rua Antero Manuel de Sá Filho, 85';

    const location = await Location.geocodeAsync(rua);
    const barLatitude = location[0].latitude.toFixed(2);
    const barLongitude = location[0].longitude.toFixed(2);

    setBarPosition([
      barLatitude,
      barLongitude,
    ])
    }
    getPosition();
  },[])

  const handleBackNavigation = useCallback(()=>{
    navigation.goBack();
  },[])

  //console.log('currentPosition: ', currentPosition, 'barPosition: ', barPosition)
  const handleCheckIn = useCallback(()=>{
    if(currentPosition[0] !== barPosition[0] && currentPosition[1] !== barPosition[1]){
      Alert.alert('Erro no check-in', 'Vá para o bar selecionado para realizar o check-in');
    }

    if(currentPosition[0] === barPosition[0] && currentPosition[1] === barPosition[1]){
      Alert.alert('Sucesso', 'Seus pontos foram creditados!');

      navigation.navigate('DashboardClient');
    }
  },[])

  return(
    <Container>

      <Header>
        <BackButton onPress={handleBackNavigation}>
          <Icon name='chevron-left' size={30} color='#bbb' />
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>
      </Header>

      <Content>
        <BarImage/>
        <BarName>Bar do Zé</BarName>
        <BarAddress>Endereço do bar</BarAddress>
        <CheckInButton onPress={handleCheckIn}>
          <CheckInButtonText>Fazer check-in</CheckInButtonText>
        </CheckInButton>
      </Content>


    </Container>
  )
}
