import React, { useCallback, useState, useEffect } from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {FontAwesome as Icon2} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {
  View,
} from 'react-native';

import api from '../../services/api';
import profile from '../../assets/antonio-perfil.jpg';
import background from '../../assets/bg-telas.jpg';
import levelProfile from '../../assets/perfil.png';

import {
  Container,
  BackButton,
  UserAvatarButton,
  Level,
  LevelText,
  UserAvatar,
  Title,
  LevelPicture,
} from './styles';


export default function ProfileClient(){
  const navigation = useNavigation();
  const [user, setUser] = useState({})

  useEffect(()=>{
    api.get('/users/1').then(response=>{
      const {data} = response;
      setUser(data);
    })
  },[])

  const handleGoBack = useCallback(()=>{
    navigation.goBack();
  },[navigation])

  return(
          <Container source={background}>
            <BackButton onPress={handleGoBack}>
              <Icon name="arrow-left" size={24} color="#f4f4f4" />
              {console.log(user)}
            </BackButton>

            <UserAvatarButton onPress={()=>{}}>
              <UserAvatar source={profile}/>
              <Level>
                <Icon2 name="star" size={22} color='#FFC44A'/>
                <LevelText>{user.level}</LevelText>
              </Level>
            </UserAvatarButton>

            <View>
              <Title>{user.name}</Title>
              <Title style={{fontSize: 15}}>{user.email}</Title>
            </View>

            <LevelPicture source={levelProfile}/>
          </Container>
  )
}
