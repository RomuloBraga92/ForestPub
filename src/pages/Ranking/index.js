import React, { useCallback, useState, useEffect } from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import pubImage from '../../assets/pubImage.jpeg';


import {
  Container,
  BackButton,
  BigImageContainer,
  HighlightedContainer,
  ChecksContainer,
  ChecksText,
  BigPubName,
  PubBlockContainer,
  PubBlock,
  PubName,
} from './styles';

export default function Ranking(){
  const navigation = useNavigation();
  const [pubData, setPubData] = useState([])
  const [pubHigh, setPubHigh] = useState({})

  const handleGoBack = useCallback(()=>{
    navigation.goBack();
  },[navigation])

  const handleNavigationMarkerDetail = useCallback((id)=>{
    navigation.navigate('MarkerDetail', {pub_id:id});
  },[navigation])

  useEffect(()=>{
    api.get('/pubs').then(response=>{
      const {data} = response;
      setPubData(data);
    })
  },[])

  useEffect(()=>{
    api.get('/pubs/3').then(response=>{
      const {data} = response;
      setPubHigh(data);
    })
  },[])

  return(
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color="#5B271F" />
      </BackButton>

      <BigImageContainer onPress={()=>handleNavigationMarkerDetail(pubHigh.id)}>
        <HighlightedContainer source={pubImage}/>
        <ChecksContainer>
            <Icon name='user' size={20} color='#5B271F'/>
            <ChecksText>{pubHigh.checkins}</ChecksText>
        </ChecksContainer>
        <BigPubName>{pubHigh.name}</BigPubName>
      </BigImageContainer>

      {pubData.map(pub => (
        <PubBlockContainer key={pub.id} onPress={()=>handleNavigationMarkerDetail(pub.id)}>
          <PubBlock source={pubImage}/>
          <ChecksContainer style={{bottom: 55, width: 50, height: 30, paddingRight: 20}}>
            <Icon name='user' size={20} color='#5B271F'/>
            <ChecksText>{pub.checkins}</ChecksText>
          </ChecksContainer>
          <PubName>{pub.name}</PubName>
        </PubBlockContainer>
      ))}

    </Container>
  );
}
