import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

import levelAwards from '../../assets/icone-premios_1.png';
import {
  Container,
  BackButton,
  Header,
  Title,
  MiniTitle,
  Content,
  AwardRowContainer,
  AwardBlockContainer,
  AwardBlock,
  AwardRank,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

import api from '../../services/api';
import background from '../../assets/bg-telas.jpg';

export default function ChooseAwards(){
  const[level, setLevel] = useState(3);
  const[selected1, setSelected1] = useState(false)
  const[selected2, setSelected2] = useState(false)
  const[selected3, setSelected3] = useState(false)
  const[selected4, setSelected4] = useState(false)
  const[selected5, setSelected5] = useState(false)
  const[selected6, setSelected6] = useState(false)
  const[selected7, setSelected7] = useState(false)
  const[selected8, setSelected8] = useState(false)
  const[selected9, setSelected9] = useState(false)
  const[selected10, setSelected10] = useState(false)

  const navigation = useNavigation();

  useEffect(()=>{
    api.get('/users').then(response=>{
      const {data} = response;
      setLevel(data[0].level);
    })
  },[])

  const handleGoBack = useCallback(()=>{
    navigation.goBack();
  },[navigation])

  const handleCheckLevel1 = useCallback((playerLevel)=>{
    if(playerLevel >= 1){
      setSelected1(true)
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < 1){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel2 = useCallback((playerLevel)=>{
    if(playerLevel >= 2){
      setSelected2(true)
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < 2){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])


  const handleCheckLevel3 = useCallback((playerLevel)=>{
    if(playerLevel >= 3){
      setSelected3(true)
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < 3){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel4 = useCallback((playerLevel)=>{
    if(playerLevel >= 4){
      setSelected4(true)
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < 4){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel5 = useCallback((playerLevel)=>{
    if(playerLevel >= 5){
      setSelected5(true)
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < 5){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel6 = useCallback((playerLevel)=>{
    if(playerLevel >= 6){
      setSelected6(true)
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < 6){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel7 = useCallback((playerLevel)=>{
    if(playerLevel >= 7){
      setSelected7(true)
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < 7){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel8 = useCallback((playerLevel)=>{
    if(playerLevel >= 8){
      setSelected8(true)
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < 8){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel9 = useCallback((playerLevel)=>{
    if(playerLevel >= 9){
      setSelected9(true)
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < 9){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel10 = useCallback((playerLevel)=>{
    if(playerLevel >= 10){
      setSelected10(true)
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < 10){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])


  return(
    <Container source={background}>
      <BackButton onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color="#f4f4f4" />
      </BackButton>
      <Header>
        <Title>Resgate as recompensas do seu nível!</Title>
        <MiniTitle>{`Você está no nível ${level}!`}</MiniTitle>
      </Header>

    <ScrollView>
      <Content>
        <AwardRowContainer>
          <AwardBlockContainer disabled={selected1} onPress={() => handleCheckLevel1(level)}>
            <AwardBlock source={levelAwards} disabled={selected1}/>
            <AwardRank>Nivel 1</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer disabled={selected2} onPress={() => handleCheckLevel2(level)}>
            <AwardBlock source={levelAwards} disabled={selected2}/>
            <AwardRank>Nivel 2</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer disabled={selected3} onPress={() => handleCheckLevel3(level)}>
            <AwardBlock source={levelAwards} disabled={selected3}/>
            <AwardRank>Nivel 3</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer disabled={selected4} onPress={() => handleCheckLevel4(level)}>
            <AwardBlock source={levelAwards} disabled={selected4}/>
            <AwardRank>Nivel 4</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer disabled={selected5} onPress={() => handleCheckLevel5(level)}>
            <AwardBlock source={levelAwards} disabled={selected5}/>
            <AwardRank>Nivel 5</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer disabled={selected6} onPress={() => handleCheckLevel6(level)}>
            <AwardBlock source={levelAwards} disabled={selected6}/>
            <AwardRank>Nivel 6</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer disabled={selected7} onPress={() => handleCheckLevel7(level)}>
            <AwardBlock source={levelAwards} disabled={selected7}/>
            <AwardRank>Nivel 7</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer disabled={selected8} onPress={() => handleCheckLevel8(level)}>
            <AwardBlock source={levelAwards} disabled={selected8}/>
            <AwardRank>Nivel 8</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer disabled={selected9} onPress={() => handleCheckLevel9(level)}>
            <AwardBlock source={levelAwards} disabled={selected9}/>
            <AwardRank>Nivel 9</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer disabled={selected10} onPress={() => handleCheckLevel10(level)}>
            <AwardBlock source={levelAwards} disabled={selected10}/>
            <AwardRank>Nivel 10</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

      </Content>
    </ScrollView>
    </Container>
  )
}
