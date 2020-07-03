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
  const[selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

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

  const handleCheckLevel = useCallback((playerLevel, awardLevel)=>{
    if(playerLevel >= awardLevel){
      setSelected([...selected, selected[awardLevel-1] = true])
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');

    }
    if(playerLevel < awardLevel){
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
          <AwardBlockContainer disabled={selected[0]} onPress={() => handleCheckLevel(level, 1)}>
            <AwardBlock source={levelAwards} disabled={selected[0]}/>
            <AwardRank>Nivel 1</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer disabled={selected[1]} onPress={() => handleCheckLevel(level, 2)}>
            <AwardBlock source={levelAwards} disabled={selected[1]}/>
            <AwardRank>Nivel 2</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer disabled={selected[2]} onPress={() => handleCheckLevel(level, 3)}>
            <AwardBlock source={levelAwards} disabled={selected[2]}/>
            <AwardRank>Nivel 3</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer disabled={selected[3]} onPress={() => handleCheckLevel(level, 4)}>
            <AwardBlock source={levelAwards} disabled={selected[3]}/>
            <AwardRank>Nivel 4</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer disabled={selected[4]} onPress={() => handleCheckLevel(level, 5)}>
            <AwardBlock source={levelAwards} disabled={selected[4]}/>
            <AwardRank>Nivel 5</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer disabled={selected[5]} onPress={() => handleCheckLevel(level, 6)}>
            <AwardBlock source={levelAwards} disabled={selected[5]}/>
            <AwardRank>Nivel 6</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer disabled={selected[6]} onPress={() => handleCheckLevel(level, 7)}>
            <AwardBlock source={levelAwards} disabled={selected[6]}/>
            <AwardRank>Nivel 7</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer disabled={selected[7]} onPress={() => handleCheckLevel(level, 8)}>
            <AwardBlock source={levelAwards} disabled={selected[7]}/>
            <AwardRank>Nivel 8</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer disabled={selected[8]} onPress={() => handleCheckLevel(level, 9)}>
            <AwardBlock source={levelAwards} disabled={selected[8]}/>
            <AwardRank>Nivel 9</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer disabled={selected[9]} onPress={() => handleCheckLevel(level, 10)}>
            <AwardBlock source={levelAwards} disabled={selected[9]}/>
            <AwardRank>Nivel 10</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

      </Content>
    </ScrollView>
    </Container>
  )
}
