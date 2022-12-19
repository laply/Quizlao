import {FlatList} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
`;

const BottomContainer = styled.View``;

const ButtonTitle = styled.Text`
  font-size: 18px;
  margin: 5px 20px;
`;
const MainTitle = styled.Text`
  font-weight: 500;
  font-size: 24px;
  margin: 10px 20px;
`;
const WrongContainer = styled.View`
  align-items: flex-start;
  border: 1px;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
`;

const makeWrongContainer = ({item}) => {
  return (
    <WrongContainer>
      <MainTitle>
        Q{item.number}. {item.question}
      </MainTitle>
      <BottomContainer>
        <ButtonTitle>정답: {item.answer}</ButtonTitle>
        <ButtonTitle>선택한 오답: {item.wrong}</ButtonTitle>
      </BottomContainer>
    </WrongContainer>
  );
};

const Note = ({route: {params}}) => {
  return (
    <Container>
      <FlatList
        ListHeaderComponent={<MainTitle>오답노트</MainTitle>}
        data={params.select}
        renderItem={({item}) =>
          makeWrongContainer({
            item,
          })
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

export default Note;
