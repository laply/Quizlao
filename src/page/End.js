import styled from 'styled-components/native';
import React, {useEffect, useState} from 'react';
import {makeTime} from '../utils';
import {addRank} from '../api/FireStore';

const TimeTitle = styled.Text`
  font-weight: 300;
  font-size: 24px;
  margin: 10px;
`;
const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 24px;
`;
const TopContainer = styled.View`
  align-items: flex-start;
`;
const ButtonContainer = styled.TouchableOpacity`
  background-color: #000;
  border-radius: 10px;
  padding: 15px 100px;
  margin: 10px;
`;

const BottomContainer = styled.View`
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
`;

// DB에 저장하기

// 오답 차트, 노트
const End = ({navigation, route: {params}}) => {
  return (
    <Container>
      <TopContainer>
        <TimeTitle>정답: {params.answer + ' / ' + params.total}</TimeTitle>
        <TimeTitle>오답: {params.wrong + ' / ' + params.total}</TimeTitle>
        <TimeTitle>
          걸린 시간:{' '}
          {makeTime(params.endTime.getTime() - params.startTime.getTime())} 초
        </TimeTitle>
      </TopContainer>
      <BottomContainer>
        <ButtonContainer onPress={() => navigation.navigate('note')}>
          <ButtonTitle>오답노트</ButtonTitle>
        </ButtonContainer>
        <ButtonContainer onPress={() => navigation.navigate('ranking')}>
          <ButtonTitle>랭킹보기</ButtonTitle>
        </ButtonContainer>
        <ButtonContainer onPress={() => navigation.navigate('main')}>
          <ButtonTitle>처음으로</ButtonTitle>
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default End;
