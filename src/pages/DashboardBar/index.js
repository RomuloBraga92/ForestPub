import React,{useEffect, useState} from 'react'
import {FontAwesome5 as Icon} from '@expo/vector-icons';

import Button from '../../components/Button';
import api from '../../services/api';
import pubImage from '../../assets/pubImage.jpeg';

import {
  Container,
  ImageContainer,
  BarImage,
  ChecksContainer,
  ChecksText,
  Content,
  BarName,
  BarAddress,
} from './styles';

export default function DashboardBar(){
  const [pubData, setPubData] = useState([]);

  useEffect(()=>{
    api.get('/pubs/3').then(response =>{
      const { data } = response;
      setPubData(data);
    })
  },[])

  return(
    <Container>
      <ImageContainer>
        <BarImage source={pubImage}/>
          <ChecksContainer>
            <Icon name='user' size={20} color='#5B271F '/>
            <ChecksText>{pubData.checkins}</ChecksText>
          </ChecksContainer>
      </ImageContainer>

      <Content>
        <BarName>{pubData.name}</BarName>
        <BarAddress>{`${pubData.street}, ${pubData.number}, ${pubData.district}, ${pubData.city} - ${pubData.uf}`}</BarAddress>
        <Button>Editar Perfil</Button>
      </Content>
    </Container>
  )
}
