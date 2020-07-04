import React, { useCallback } from 'react';
import {useNavigation} from '@react-navigation/native'

import {Container, Title, BlocksContainer, BlockContainer, Block, BlockText} from './styles';
import clientImage from '../../assets/foto-clientes.jpg';
import pubImage from '../../assets/foto-bar.jpg';
import background from '../../assets/bg-telas.jpg';

export default function ChooseBarClientSignUp() {
  const navigation = useNavigation();

  const handleSignUpClient = useCallback(()=>{
    navigation.navigate('SignUpClient')
  },[])

  const handleSignUpBar = useCallback(()=>{
    navigation.navigate('SignUpBar')
  },[])

  return(
    <>
      <Container source={background}>
        <Title>Cadastre-se Agora!</Title>

        <BlocksContainer>
          <BlockContainer onPress={handleSignUpClient}>
            <Block source={clientImage}/>
            <BlockText>Cliente</BlockText>
          </BlockContainer>

          <BlockContainer onPress={handleSignUpBar}>
            <Block source={pubImage}/>
            <BlockText>Bar</BlockText>
          </BlockContainer>
        </BlocksContainer>
      </Container>
    </>
  );
}
