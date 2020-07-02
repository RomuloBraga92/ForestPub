import React, { useCallback, useState, useEffect } from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from 'react-native';

import api from '../../services/api';

import {
  Container,
  BackButton,
  UserAvatarButton,
  Level,
  LevelText,
  UserAvatar,
  Title,
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
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={24} color="#999591" />
              {console.log(user)}
            </BackButton>

            <UserAvatarButton onPress={()=>{}}>
              <UserAvatar/>
              <Level>
                <LevelText>Nível {user.level}</LevelText>
              </Level>
            </UserAvatarButton>

            <View>
              <Title>{user.name}</Title>
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}
