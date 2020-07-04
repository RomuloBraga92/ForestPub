import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { CheckBox } from 'react-native-elements'

import Button from '../../components/Button';
import Input from '../../components/input';
import background from '../../assets/bg-telas.jpg';

import { OutsideContainer, Container, Title, MiniTitle } from './styles'

export default function SignIn(){
  const formRef = useRef(null);
  const navigation = useNavigation();
  const [isCheck, setIsCheck] = useState(false);

  const handleDashboardBar = useCallback(()=>{
    navigation.navigate('DashboardBar');
  },[])

  return(
    <OutsideContainer source={background}>
    <KeyboardAvoidingView
        style={{ flex: 1}}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
      <ScrollView
          keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Title>Cadastre-se Agora!</Title>
          <MiniTitle>Dados do seu bar!</MiniTitle>
          <Form ref={formRef} onSubmit={handleDashboardBar} style={{marginTop: 20}}>
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="nome"
            placeholder="Nome"
            />
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            name="cnpj"
            placeholder="CNPJ - Apenas números"
            />
            <Input
            type="email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            placeholder="E-mail"
            />
            <Input
            type="number"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            name="capacity"
            placeholder="Capacidade Máxima"
            />
            <Input
            name="password"
            type="password"
            secureTextEntry
            placeholder="Senha"
            returnKeyType="send"
            />

            <MiniTitle style={{marginLeft: 93, marginBottom: 15}}>Endereço</MiniTitle>

            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="rua"
            placeholder="Rua"
            />
            <Input
            type="text"
            autoCorrect={false}
            name="numero"
            placeholder="Número"
            />
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="bairro"
            placeholder="Bairro"
            />
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="cidade"
            placeholder="Cidade"
            />
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="uf"
            placeholder="UF"
            />

            <CheckBox
              center
              title='Aceito as políticas do aplicativo'
              checked={isCheck}
              containerStyle={styles.checkboxContainer}
              onPress={()=>setIsCheck(!isCheck)}
              textStyle={{color: '#f4f4f4'}}
              checkedColor='#6A9B14'
            />


            <Button disabled={!isCheck} onPress={() => formRef.current.submitForm()}
            style={[
              styles.buttonContainer,
              isCheck ? {} : styles.buttonDisabled
            ]}>
            Cadastrar
            </Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  </OutsideContainer>
  )
}

const styles = StyleSheet.create({
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: '#f4f4f4'
  },

  buttonContainer:{
    width: 200,
    marginLeft: '12%'
  },

  buttonDisabled:{
    opacity: 0.4
  }
})
