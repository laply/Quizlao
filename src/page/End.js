import styled from 'styled-components/native';
import React from 'react';
import {makeTime} from '../utils';
import {ProgressChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const TopContainer = styled.View`
  align-items: center;
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
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
`;

const HeadTitle = styled.Text`
  font-weight: 800;
  font-size: 30px;
`;

const SubTitle = styled.Text`
  font-weight: 400;
  font-size: 20px;
  margin: 20px;
`;
const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 24px;
`;

const End = ({navigation, route: {params}}) => {
  const data = {
    labels: ['정답'], 
    data: [params.answer / params.total],
  };
  return (
    <Container>
      <HeadTitle>퀴즈 완료</HeadTitle>
      <TopContainer>
        <ProgressChart
          data={data}
          width={width}
          height={100}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 0, 146, ${opacity})`,
            barPercentage: 0.5,
          }}
          hideLegend={false}
        />
        <SubTitle>
          정답: {params.answer} 개 / 오답: {params.wrong} 개 ({' '}
          {makeTime(params.endTime.getTime() - params.startTime.getTime())} 초 )
        </SubTitle>
      </TopContainer>
      <BottomContainer>
        <ButtonContainer onPress={() => navigation.navigate('note', params)}>
          <ButtonTitle>오답노트</ButtonTitle>
        </ButtonContainer>

        <ButtonContainer onPress={() => navigation.navigate('main')}>
          <ButtonTitle>처음으로</ButtonTitle>
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default End;
