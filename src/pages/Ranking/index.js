import React, { useCallback, useState, useEffect } from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import pubImage from '../../assets/pubImage.jpeg';
import background from '../../assets/bg-telas.jpg';

import {
  OutsideContainer,
  Container,
  BackButton,
  PubsContainer,
  BigImageContainer,
  BarInfoContainer,
  HighlightedContainer,
  ContentContainer,
  ChecksContainer,
  ChecksText,
  BigPubName,
  BigPubAddress,
  PubBlockContainer,
  PubInfoContainer,
  PubContent,
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
    <OutsideContainer source={background}>
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color="#f4f4f4" />
      </BackButton>

      <BigImageContainer onPress={()=>handleNavigationMarkerDetail(pubHigh.id)}>
        <HighlightedContainer source={pubImage}/>
        <ContentContainer>
          <BarInfoContainer>
          <BigPubName>{pubHigh.name}</BigPubName>
          <BigPubAddress>{`${pubHigh.street}, ${pubHigh.number}, ${pubHigh.district}, ${pubHigh.city} - ${pubHigh.uf}`}</BigPubAddress>
          </BarInfoContainer>
          <ChecksContainer>
              <Icon name='user' size={20} color='#FFC44A'/>
              <ChecksText>{pubHigh.checkins}</ChecksText>
          </ChecksContainer>
        </ContentContainer>
      </BigImageContainer>

      {pubData.map(pub => (
        <PubsContainer key={pub.id} onPress={()=>handleNavigationMarkerDetail(pub.id)}>
        <PubBlockContainer>
          <PubBlock source={pubImage}/>
          <PubContent>
          <PubInfoContainer>
          <ChecksContainer style={{right: -52, width: 50}}>
            <Icon name='user' size={20} color='#FFC44A'/>
            <ChecksText>{pub.checkins}</ChecksText>
          </ChecksContainer>
          <PubName>{pub.name}</PubName>
          </PubInfoContainer>
          </PubContent>
        </PubBlockContainer>
        </PubsContainer>
      ))}
    </Container>
    </OutsideContainer>
  );
}
