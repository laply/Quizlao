import styled from 'styled-components/native';
import React from 'react';


const MainTitle = styled.Text`
  font-weight: 800;
  font-size: 40px;
`;
const SubTitle = styled.Text`
  font-size: 20px;
  margin: 5px;
`;
const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 24px;
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

const Main = ({navigation}) => {
  return (
    <Container>
      <MainTitle>Quizlao</MainTitle>
      <BottomContainer>
        <SubTitle> 버튼을 눌러 퀴즈를 풀어 실력을 보여주세요!</SubTitle>
        <ButtonContainer onPress={() => navigation.navigate('quiz')}>
          <ButtonTitle>퀴즈풀기</ButtonTitle>
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default Main;
