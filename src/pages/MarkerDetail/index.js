import React, {useCallback, useState, useEffect, useMemo} from 'react';
import {FontAwesome as Icon} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import scanCode from '../../assets/icone-sacn.png';
import api from '../../services/api';
import pubImage from '../../assets/pubImage.jpeg';
import {
Container,
Header,
BackButton,
ImageContainer,
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
ScanCodeIcon,
RatingMail,
RatingMailText,
} from './styles';


export default function MarkerDetail(){
  const [currentPosition, setCurrentPosition] = useState([0,0]);
  const [user, setUser] = useState({});
  const [checkin, setCheckin] = useState(false);
  const [pubPosition, setPubPosition] = useState([0,0]);
  const [pubData, setPubData] = useState({});
  var points = user.points;
  var level = user.level;
  var pubChecks = pubData.checkins;
  var isChecked = user.isCheck;
  const message = `Olá, ${pubData.name}! `

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

  const handleUncheckIn = useCallback(async()=>{
    setCheckin(false);
    isChecked = false;
    await api.patch('/users/1', {isCheck: isChecked })
  },[])

  const handleCheckIn = useCallback(async ()=>{
    if(currentPosition[0] !== pubPosition[0] && currentPosition[1] !== pubPosition[1]){
      Alert.alert('Erro no check-in', 'Vá para o bar selecionado para realizar o check-in')
    }

    if(currentPosition[0] === pubPosition[0] && currentPosition[1] === pubPosition[1]){
      Alert.alert('Sucesso', '+10 pontos!');
      setCheckin(true);
      setTimeout(handleUncheckIn, 10000);

      points += 10;
      await api.patch('/users/1', {points: points});
      level = Math.floor(points/100);
      await api.patch('/users/1', {level: level});
      pubChecks += 1;
      await api.patch(`/pubs/${routeParams.pub_id}`, {checkins: pubChecks})
      isChecked = true;
      await api.patch('/users/1', {isCheck: isChecked})

    }
  },[currentPosition, pubPosition])

  const handleCameraClick = useCallback(()=>{
    navigation.navigate('ScanCode');
  },[])

  const handleSendMail = useCallback(()=>{
    MailComposer.composeAsync({
      subject: `Mensagem para: ${pubData.name}`,
      recipients: [pubData.email],
      body: message,
    })
  },[])

  return(
    <Container>
      <Header>
        <BackButton onPress={handleBackNavigation}>
          <Icon name='arrow-left' size={18} color='#5B271F' />
        </BackButton>
      </Header>

      <Content>
        <ImageContainer>
        <BarImage source={pubImage}/>
          <ChecksContainer>
            <Icon name='user' size={20} color='#5B271F'/>
            <ChecksText>{pubData.checkins}</ChecksText>
          </ChecksContainer>
        </ImageContainer>

        <BarName>{pubData.name}</BarName>
        <BarAddress>{`${pubData.street}, ${pubData.number}, ${pubData.district}, ${pubData.city} - ${pubData.uf}`}</BarAddress>
        <ButtonsContainer>
          <CheckInButton onPress={handleCheckIn} disabled={checkin}>
            <CheckInButtonText>Fazer check-in</CheckInButtonText>
          </CheckInButton>
          <ScanCodeButton onPress={handleCameraClick} disabled={!checkin}>
            <ScanCodeIcon source={scanCode}/>
          </ScanCodeButton>
        </ButtonsContainer>

        <RatingMail onPress={handleSendMail}>
          <RatingMailText>Entre em contato!</RatingMailText>
        </RatingMail>
      </Content>


    </Container>
  )
}
