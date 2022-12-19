import styled from 'styled-components/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {unescapeHtml, shuffleArray, makeTime} from '../utils';
import {getData} from '../api/Server';
import {useQuery} from 'react-query';
import Loader from '../Loader';
const {width, height} = Dimensions.get('window');

const ButtonContainer = styled.TouchableOpacity`
  background-color: #000;
  border-radius: 10px;
  width: ${width * 0.9}px;
  padding: 15px;
  align-items: center;
  margin: 15px ${width * 0.05}px;
`;
const Container = styled.View`
  height: ${height}px;
  flex-direction: column;
  background-color: #fff;
`;

const StateContainer = styled.View`
  height: ${height}px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const TimeTitle = styled.Text`
  font-weight: 300;
  font-size: 24px;
  margin: 20px;
`;
const MainTitle = styled.Text`
  font-weight: 600;
  font-size: 30px;
  margin: 0px 20px 50px;
`;

const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 24px;
`;

const MakeSelection = ({item, data, answerEvent, wrongEvent, userInfo}) => {
  return (
    <ButtonContainer
      onPress={() => {
        if (item == data.results[userInfo.total].correct_answer) {
          answerEvent(item);
        } else {
          wrongEvent(item);
        }
      }}
    >
      <ButtonTitle>{unescapeHtml(item)}</ButtonTitle>
    </ButtonContainer>
  );
};

const Quiz = ({navigation}) => {
  const {isLoading, data, refetch} = useQuery(['quiz'], getData);

  const [userInfo, setUserInfo] = useState({
    answer: 0,
    wrong: 0,
    total: 0,
    startTime: new Date(),
    endTime: '',
    select: [],
  });

  const [info, setInfo] = useState();
  const [question, setQuestion] = useState();
  const [changedState, setChangedState] = useState(false);
  const [answerState, setAnswerState] = useState(false);
  const [time, setTime] = useState(0);

  const updateLevel = () => {
    setQuestion(unescapeHtml(data?.results[userInfo?.total].question));

    setInfo(
      shuffleArray(
        data?.results[userInfo?.total].incorrect_answers.concat(
          data?.results[userInfo?.total].correct_answer,
        ),
      ),
    );
  };

  setTimeout(() => {
    setTime(new Date() - userInfo.startTime);
  }, 1000);

  useEffect(() => {
    updateLevel();
  }, [isLoading]);

  return isLoading ? (
    <Loader />
  ) : changedState ? (
    <Container>
      <TimeTitle>{makeTime(time)}</TimeTitle>
      <StateContainer>
        <MainTitle>{answerState ? '정답!' : '오답 ㅜㅜ'}</MainTitle>
        <ButtonContainer
          onPress={() => {
            userInfo.total += 1;

            if (userInfo.total >= data.results.length) {
              userInfo.endTime = new Date();
              navigation.navigate('end', userInfo);
            } else {
              updateLevel();
              setChangedState(false);
            }
          }}
        >
          <ButtonTitle>다음으로</ButtonTitle>
        </ButtonContainer>
      </StateContainer>
    </Container>
  ) : (
    <Container>
      <FlatList
        data={info}
        ListHeaderComponent={
          <>
            <TimeTitle>{makeTime(time)}</TimeTitle>
            <MainTitle>
              Q{userInfo?.total + 1}. {question}
            </MainTitle>
          </>
        }
        renderItem={({item}) =>
          MakeSelection({
            item,
            data,
            answerEvent: item => {
              setAnswerState(true);
              setChangedState(true);
              userInfo.answer += 1;
            },
            wrongEvent: item => {
              setAnswerState(false);
              setChangedState(true);
              userInfo.wrong += 1;
              userInfo.select.push({
                number: userInfo?.total + 1,
                question,
                answer: data?.results[userInfo?.total].correct_answer,
                wrong: item,
              });
            },
            userInfo,
          })
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
      />
    </Container>
  );
};

export default Quiz;
