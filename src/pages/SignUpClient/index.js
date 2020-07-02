import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import * as Yup from 'yup';

import api from '../../services/api';
import getValidationErrors from '../utils/getValidationErrors';
import Button from '../../components/Button';
import Input from '../../components/input';
import {Container, Title} from './styles';

export default function SignIn(){
  const navigation = useNavigation();
  const formRef = useRef(null);

  const handleDashboardNavigation = useCallback(()=>{
    navigation.navigate('DashboardClient')
  },[])

  const handleSignUp = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

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

          formRef.current?.setErrors(errors);

          console.log(errors);
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
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="none"
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

            <Button onPress={() => formRef.current.submitForm()} style={{width: 200, marginLeft: 50}}>Cadastrar</Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
