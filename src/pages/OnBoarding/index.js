import React, { useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import background from '../../assets/bg-telas.jpg';
import logo from '../../assets/logo.png';

import {
Container,
Logo,
BackgroundText,
Content,
RegisterButton,
RegisterText,
} from './styles';

export default function OnBoarding(){
  const navigation = useNavigation();

  const handleSignUpNavigation = useCallback(()=>{
    navigation.navigate('ChooseBarClientSignUp');
  },[])

  const handleSignInNavigation = useCallback(()=>{
    navigation.navigate('SignIn')
  })

  return(
    <Container source={background}>
      <Content>
        <Logo source={logo}/>
        <BackgroundText>Há tantos bares para se aventurar quanto há mistérios em uma floresta. Desbrave e ganhe prêmios!</BackgroundText>
        <Button onPress={handleSignInNavigation}>Iniciar</Button>
        <RegisterButton onPress={handleSignUpNavigation}>
          <RegisterText>Registre-se</RegisterText>
        </RegisterButton>
      </Content>
    </Container>
  )
}
