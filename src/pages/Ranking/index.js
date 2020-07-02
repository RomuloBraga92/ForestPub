import React, { useCallback } from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  HighlightedContainer,
  BackButton,
} from './styles';

export default function Ranking(){
  const navigation = useNavigation();

  const handleGoBack = useCallback(()=>{
    navigation.goBack();
  },[navigation])

  return(
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon name="chevron-left" size={24} color="#999591" />
      </BackButton>

      <HighlightedContainer></HighlightedContainer>
    </Container>
  );
}
