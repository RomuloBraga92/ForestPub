import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { KeyboardAvoidingView, ScrollView, Alert, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import * as Yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';

import api from '../../services/api';
import getValidationErrors from '../utils/getValidationErrors';
import Button from '../../components/Button';
import Input from '../../components/input';
import background from '../../assets/bg-telas.jpg';

import {OutsideContainer, Container, Title} from './styles';

export default function SignIn(){
  const navigation = useNavigation();
  const formRef = useRef(null);


  const handleSignUp = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required().min(6, 'Mínimo de 6 dígitos'),
          cpf: Yup.string().required(),
        });

        await schema.validate(data,{
          abortEarly: false
        });

        await api.post('/user/signup', data);

        Alert.alert('Cadastro realizado com sucesso');

        navigation.navigate('SignIn');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer o cadastro, tente novamente.',
        );
      }
    },
    [navigation],
  );

  return(
    <OutsideContainer source={background}>
    <KeyboardAvoidingView
        style={{ flex: 1}}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
      <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Title>Cadastre-se Agora!</Title>
          <Form ref={formRef} onSubmit={handleSignUp} style={{marginTop: 50}}>
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="name"
            placeholder="Nome"
            />
            <Input
            type="email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            placeholder="E-mail"
            />
            <RNPickerSelect
              placeholder={{}}
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: 'Gênero', value: 'genero' },
                  { label: 'Masculino', value: 'masculino' },
                  { label: 'Feminino', value: 'feminino' },
                  { label: 'Outro', value: 'outro' },
              ]}
              style={pickerSelectStyles}
            />
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            name="cpf"
            placeholder="CPF - Apenas números"
            />
            <Input
            name="password"
            type="password"
            secureTextEntry
            placeholder="Senha"
            returnKeyType="send"
            />

            <Button onPress={() => formRef.current.submitForm()}>Cadastrar</Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
    </OutsideContainer>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#5B271F',
    borderRadius: 20,
    paddingRight: 30,
    marginBottom: 15,
    backgroundColor: '#f4f4f4',
    fontFamily: 'Poppins_400Regular',
    color: '#312e38',
  },
  inputAndroid: {
    fontSize: 15,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#5B271F',
    borderRadius: 20,
    paddingRight: 30,
    marginBottom: 15,
    backgroundColor: '#f4f4f4',
    fontFamily: 'Poppins_400Regular',
    color: '#312e38',
  },
});
