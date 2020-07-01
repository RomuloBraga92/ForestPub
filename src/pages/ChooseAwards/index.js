import React, {useState, useCallback, useMemo} from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

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

export default function ChooseAwards(){
  const[level, setLevel] = useState(1);
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

  const handleGoBack = useCallback(()=>{
    navigation.goBack();
  },[navigation])

  const handleCheckLevel = useCallback((playerLevel, awardLevel)=>{
    if(playerLevel >= awardLevel){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected([selected[awardLevel-1] = true])
    }
    if(playerLevel < awardLevel){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  return(
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon name="chevron-left" size={24} color="#999591" />
      </BackButton>
      <Header>
        <Title>Resgate as recompensas do seu nível!</Title>
        <MiniTitle>{`Você está no nível ${level}!`}</MiniTitle>
      </Header>

    <ScrollView>
      <Content>
        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock disabled={selected[0]} onPress={() => handleCheckLevel(level, 1)}/>
            <AwardRank>Nivel 1</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock disabled={selected[1]} onPress={() => handleCheckLevel(level, 2)}/>
            <AwardRank>Nivel 2</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock disabled={selected[2]} onPress={() => handleCheckLevel(level, 3)}/>
            <AwardRank>Nivel 3</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock disabled={selected[3]} onPress={() => handleCheckLevel(level, 4)}/>
            <AwardRank>Nivel 4</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock disabled={selected[4]} onPress={() => handleCheckLevel(level, 5)}/>
            <AwardRank>Nivel 5</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock disabled={selected[5]} onPress={() => handleCheckLevel(level, 6)}/>
            <AwardRank>Nivel 6</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock disabled={selected[6]} onPress={() => handleCheckLevel(level, 7)}/>
            <AwardRank>Nivel 7</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock disabled={selected[7]} onPress={() => handleCheckLevel(level, 8)}/>
            <AwardRank>Nivel 8</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock disabled={selected[8]} onPress={() => handleCheckLevel(level, 9)}/>
            <AwardRank>Nivel 9</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock disabled={selected[9]} onPress={() => handleCheckLevel(level, 10)}/>
            <AwardRank>Nivel 10</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

      </Content>
    </ScrollView>
    </Container>
  )
}
