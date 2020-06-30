import React from 'react';

import {
  Container,
  Header,
  Title,
  Content,
  AwardRowContainer,
  AwardBlockContainer,
  AwardBlock,
  AwardRank,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function ChooseAwards(){
  return(
    <Container>
      <Header>
        <Title>Resgate as recompensas do seu nível!</Title>
      </Header>

    <ScrollView>
      <Content>
        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock/>
            <AwardRank>Nivel 1</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock/>
            <AwardRank>Nivel 2</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock/>
            <AwardRank>Nivel 3</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock/>
            <AwardRank>Nivel 4</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock/>
            <AwardRank>Nivel 5</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock/>
            <AwardRank>Nivel 6</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock/>
            <AwardRank>Nivel 7</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock/>
            <AwardRank>Nivel 8</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock/>
            <AwardRank>Nivel 9</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock/>
            <AwardRank>Nivel 10</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

      </Content>
    </ScrollView>
    </Container>
  )
}
